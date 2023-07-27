// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWdhlVXUes-Cal7J_KWWAAhaWk54V6Vrg",
  authDomain: "kits-6d54d.firebaseapp.com",
  projectId: "kits-6d54d",
  storageBucket: "kits-6d54d.appspot.com",
  messagingSenderId: "1008363428018",
  appId: "1:1008363428018:web:433d28ad1c0c2605da51ab",
  measurementId: "G-V5QTDV1Q1L"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);