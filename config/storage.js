import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import app from "./app";

const storage = getStorage(app, "gs://konneckin-newsapi.appspot.com");

export default storage;
