// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfRp1ll0VrLbMqYSHs7tC2Fv3hKSX0eu4",
  authDomain: "heath-app-e296a.firebaseapp.com",
  projectId: "heath-app-e296a",
  storageBucket: "heath-app-e296a.firebasestorage.app",
  messagingSenderId: "358333019396",
  appId: "1:358333019396:web:782570186b63246357cc51",
  measurementId: "G-PXJJDFB31N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
