import { initializeApp } from "firebase/app";
import { getDoc, doc, setDoc, collection } from "firebase/firestore";

import db from "../../config/firebase";

export default async function handler(req, res) {
  const servicesRef = collection(db, "services");
  if (req.method == "POST") {
    const { title, body, img } = req.body;

    const slug = title.toLowerCase().replace(/\s/g, "-");

    const docRef = doc(servicesRef, slug);

    await setDoc(docRef, {
      title,
      body,
      img,
    });

    const cat = doc(servicesRef, "list-services");
    const catSnap = await getDoc(cat);
    if (catSnap.exists()) {
      const catData = catSnap.data();
      const newCatData = {
        ...catData,
        [slug]: title,
      };
      await setDoc(cat, newCatData);
    } else {
      await setDoc(cat, {
        [slug]: title,
      });
    }

    return res.status(200).json({ message: "success" });
  }

  if (req.method == "GET") {
    const cat = doc(servicesRef, "list-services");
    const catSnap = await getDoc(cat);
    if (catSnap.exists()) {
      const catData = catSnap.data();
      const news = [];
      for (const key in catData) {
        const newsDoc = doc(servicesRef, key);
        const newsSnap = await getDoc(newsDoc);
        if (newsSnap.exists()) {
          news.push({ slug: key, ...newsSnap.data() });
        }
      }
      return res.status(200).json(news);
    } else {
      return res.status(200).json([]);
    }
  }
}
