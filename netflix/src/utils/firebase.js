// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Rf_G-YM0Bw1XEdrzRSnLFNRuhse4ReI",
  authDomain: "netflixgpt-73a22.firebaseapp.com",
  projectId: "netflixgpt-73a22",
  storageBucket: "netflixgpt-73a22.appspot.com",
  messagingSenderId: "756403093723",
  appId: "1:756403093723:web:9cdcee9cfb887fdd5e0cfe",
  measurementId: "G-2H5W1KMWY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();