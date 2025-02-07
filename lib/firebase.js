// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJhAH2p3VBQmp2jg5tvxPOIRdstrIOYUg",
  authDomain: "inkcity-78b45.firebaseapp.com",
  projectId: "inkcity-78b45",
  storageBucket: "inkcity-78b45.firebasestorage.app",
  messagingSenderId: "110161612966",
  appId: "1:110161612966:web:5f55dedee371414049a467",
  measurementId: "G-JM7TSWMS5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  // Dynamically import analytics only on client side
  import('firebase/analytics').then((module) => {
    analytics = module.getAnalytics(app);
  });
}

const db = getFirestore(app);

export { db, analytics };