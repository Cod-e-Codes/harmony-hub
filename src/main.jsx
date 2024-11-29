import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
