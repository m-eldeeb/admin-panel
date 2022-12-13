import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-panel-dc432.firebaseapp.com",
  projectId: "admin-panel-dc432",
  storageBucket: "admin-panel-dc432.appspot.com",
  messagingSenderId: "1050109361654",
  appId: "1:1050109361654:web:4e00d4715d46c6b4245bd7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
