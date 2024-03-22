import app from "./app";
import {
  getDoc,
  doc,
  setDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

const db = getFirestore(app);

export default db;
