import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJNSIxf8Q93dRHIbUcs3cj7tQcFqvz8Sg",
  authDomain: "house-marketplace-app-6be05.firebaseapp.com",
  projectId: "house-marketplace-app-6be05",
  storageBucket: "house-marketplace-app-6be05.appspot.com",
  messagingSenderId: "250495143209",
  appId: "1:250495143209:web:0c4c0406096f71bc27fb38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()