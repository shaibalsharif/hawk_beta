// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBptxg07oeKmVm_C1OK2BetBwlXTza5kvM",
  authDomain: "hawk-5a18f.firebaseapp.com",
  projectId: "hawk-5a18f",
  storageBucket: "hawk-5a18f.appspot.com",
  messagingSenderId: "568879197774",
  appId: "1:568879197774:web:d17ba1e880318c409f9d1f",
  measurementId: "G-2W540HV6GX"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);