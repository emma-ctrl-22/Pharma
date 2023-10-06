// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALzQ0i8DFLFQ_PzXMIIRpUnlBu-Vbgiac",
  authDomain: "pharma-d5b92.firebaseapp.com",
  projectId: "pharma-d5b92",
  storageBucket: "pharma-d5b92.appspot.com",
  messagingSenderId: "978513538524",
  appId: "1:978513538524:web:3ef159288d1b1ef4513319",
  measurementId: "G-D3JK4ZBZTT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);