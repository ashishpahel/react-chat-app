import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrJRbUz6i4tQygmLdgixLtBFrLklMKHGQ",
  authDomain: "react-chat-app-1c4ed.firebaseapp.com",
  projectId: "react-chat-app-1c4ed",
  storageBucket: "react-chat-app-1c4ed.appspot.com",
  messagingSenderId: "525346290343",
  appId: "1:525346290343:web:d4587aa3087dbb480c7982",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const firestore = firebase.firestore();

export const storage = getStorage();
