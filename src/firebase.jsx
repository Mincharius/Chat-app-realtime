// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyBu-YqrJeXagA-uEZHdtS5kUwuZNvPlE",
  authDomain: "chat-app-realtime-2c25b.firebaseapp.com",
  projectId: "chat-app-realtime-2c25b",
  storageBucket: "chat-app-realtime-2c25b.appspot.com",
  messagingSenderId: "470089962827",
  appId: "1:470089962827:web:baca22929e45b91b3404ce",
  measurementId: "G-WYDMSK9XT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);