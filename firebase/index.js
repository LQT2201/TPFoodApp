import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs,query, where } from "firebase/firestore";
import { doc, setDoc,addDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA4NK4GZAyneHcyMQkHhtDtKBKEN2bnO8U",
  authDomain: "food-app-8df71.firebaseapp.com",
  projectId: "food-app-8df71",
  storageBucket: "food-app-8df71.appspot.com",
  messagingSenderId: "282331803437",
  appId: "1:282331803437:web:7b19ba9bdbd2bd71146da4",
  measurementId: "G-MNMS1Z35VC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { auth,app, getFirestore, db, collection, getDocs, firebaseConfig,query, where,setDoc,doc,addDoc};
