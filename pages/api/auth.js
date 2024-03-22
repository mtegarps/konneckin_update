import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  inMemoryPersistence,
} from "firebase/auth";

import app from "../../config/app";

export default async function handler(req, res) {
  const token = req.headers.authorization;
  if (req.method === "GET") {
    try {
      const auth = getAuth(app);
      const user = auth.currentUser;

      if (!auth.currentUser) {
        return res.status(401).json({ msg: "you are not authenticated 00" });
      }

      if (user.stsTokenManager.expirationTime < Date.now()) {
        return res.status(401).json({ msg: "token expired" });
      }

      if (token !== `Bearer ${user.stsTokenManager.accessToken}`) {
        return res.status(401).json({
          msg: "you are not authenticated 01",
        });
      }

      return res.status(200).json(auth.currentUser);
    } catch (e) {
      return res
        .status(500)
        .json({ errorMessage: e.message || "Unknown error occurred" });
    }
  }

  if (req.method === "POST") {
    const auth = getAuth(app);
    const action = req.body.action;
    const email = req.body.email;
    const password = req.body.password;
    if (action === "logout") {
      signOut(auth)
        .then(() => {
          return res.status(200).json({ msg: "successfully logged out" });
        })
        .catch((error) => {
          return res.status(errorCode).json({ errorMessage });
        });
    } else {
      try {
        await setPersistence(auth, inMemoryPersistence).then(async () => {
          await signInWithEmailAndPassword(auth, email, password).then(
            async (userCredential) => {
              const user = userCredential.user;
              return res.status(200).json({
                msg: "successfully logged in",
                data: {
                  uid: user.uid,
                  email: user.email,
                  token: user.stsTokenManager,
                },
              });
            }
          );
        });
      } catch (e) {
        return res
          .status(500)
          .json({ errorMessage: e || "Unknown error occurred" });
      }
      return;
    }
  }
}
