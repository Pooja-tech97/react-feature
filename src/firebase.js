// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL9VffFdTJZNCtKrt4cl8qZ603OfftGCo",
  authDomain: "counter-fed1a.firebaseapp.com",
  projectId: "counter-fed1a",
  storageBucket: "counter-fed1a.firebasestorage.app",
  messagingSenderId: "647848573766",
  appId: "1:647848573766:web:0f3096f23421f525a1c347",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
