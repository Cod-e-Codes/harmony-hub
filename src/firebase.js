import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where, limit, orderBy, startAfter } from "firebase/firestore"; // Import orderBy

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHwr1gZormpKCcsaX91JLiA8eE7RIEfW8",
    authDomain: "harmony-hub-30b3c.firebaseapp.com",
    projectId: "harmony-hub-30b3c",
    storageBucket: "harmony-hub-30b3c.appspot.com",
    messagingSenderId: "882342365121",
    appId: "1:882342365121:web:0587715dcffd7b5a8b1140",
    measurementId: "G-R9Z8JXTBK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, collection, addDoc, getDocs, query, where, limit, orderBy, startAfter }; // Export orderBy
