// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPpJJg7ekBIawOoX1rL-bDW7QVcbDzYkc",
  authDomain: "nextflixgpt-8c4f7.firebaseapp.com",
  projectId: "nextflixgpt-8c4f7",
  storageBucket: "nextflixgpt-8c4f7.firebasestorage.app",
  messagingSenderId: "896249464411",
  appId: "1:896249464411:web:d6bb7ca2ed68a7e785e17e",
  measurementId: "G-PXNY434XQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();