import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2sbGkz_oWoFg-991eoIRy2hvLAyktJng",
  authDomain: "inkcity-6fed7.firebaseapp.com",
  projectId: "inkcity-6fed7",
  storageBucket: "inkcity-6fed7.firebasestorage.app",
  messagingSenderId: "982550731437",
  appId: "1:982550731437:web:25401605df5e241e51c424",
};

// Reuse existing app during hot-reload/server reuse to avoid duplicate-app errors.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app, `gs://${firebaseConfig.storageBucket}`);

export { app, db, storage };
