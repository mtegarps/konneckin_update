import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import db from "../../../config/firebase";

export default async function handler(req, res) {
  const newsRef = collection(db, "news");
  if (req.method == "POST") {
    const { title, body, img, link } = req.body;

    const slug = req.query.slug;

    const docRef = doc(newsRef, slug);

    await setDoc(docRef, {
      title,
      body,
      img,
      link,
    });

    const cat = doc(newsRef, "list-news");
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

    return res.status(200).json({ message: "success updated" });
  }

  if (req.method == "GET") {
    const cat = doc(newsRef, req.query.slug);
    const catSnap = await getDoc(cat);
    return res.status(200).json(catSnap.data());
  }

  if (req.method == "DELETE") {
    const slug = req.query.slug;
    const docRef = doc(newsRef, slug);
    await setDoc(docRef, {
      title: "",
      body: "",
      img: "",
      link: "",
    });

    const cat = doc(newsRef, "list-news");
    const catSnap = await getDoc(cat);
    if (catSnap.exists()) {
      const catData = catSnap.data();
      delete catData[slug];
      await setDoc(cat, catData);
    }

    return res.status(200).json({ message: "success deleted" });
  }
}
