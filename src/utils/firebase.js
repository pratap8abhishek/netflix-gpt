// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB73dQUmpifkWnE1-fUQarB2KG2wIfu67U",
  authDomain: "netflixgpt-994cc.firebaseapp.com",
  projectId: "netflixgpt-994cc",
  storageBucket: "netflixgpt-994cc.appspot.com",
  messagingSenderId: "115526491960",
  appId: "1:115526491960:web:0908818dd1ac9a4518ebcd",
  measurementId: "G-ZE2LDL5DPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();