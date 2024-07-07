// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDav93COAe70KmW0s4jXn2lVQCYczA3lGk",
  authDomain: "ecom-97f61.firebaseapp.com",
  projectId: "ecom-97f61",
  storageBucket: "ecom-97f61.appspot.com",
  messagingSenderId: "711739350906",
  appId: "1:711739350906:web:e01e391973c1a2ae3cc0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

