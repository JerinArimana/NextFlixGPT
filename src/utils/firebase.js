// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVYuJXhVj19Tk0AfCbCBDkY2bJBivn0U4",
  authDomain: "netflix-gpt-3c353.firebaseapp.com",
  projectId: "netflix-gpt-3c353",
  storageBucket: "netflix-gpt-3c353.firebasestorage.app",
  messagingSenderId: "86038251978",
  appId: "1:86038251978:web:7b7e04bcbd5ebdafa9a733",
  measurementId: "G-TJ71LMLBF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
