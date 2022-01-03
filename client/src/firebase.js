// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH4MTEQifC8FjFpUIW5BhpdBmHFOiI2to",
  authDomain: "blitz-chat-app.firebaseapp.com",
  projectId: "blitz-chat-app",
  storageBucket: "blitz-chat-app.appspot.com",
  messagingSenderId: "1085561891241",
  appId: "1:1085561891241:web:5ca56ed014c11ad7a23cb8",
  measurementId: "G-V06TPT3N1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);