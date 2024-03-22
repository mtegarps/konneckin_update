import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvCYgL-V5NVTr4sDtLBRFpoM6AC8aI3YM",
  authDomain: "konneckin-newsapi.firebaseapp.com",
  projectId: "konneckin-newsapi",
  storageBucket: "konneckin-newsapi.appspot.com",
  messagingSenderId: "1017627587867",
  appId: "1:1017627587867:web:6328d482c28264336b0fbe",
  measurementId: "G-MNSXHE8EBJ",
};
const app = initializeApp(firebaseConfig);
export default app;
