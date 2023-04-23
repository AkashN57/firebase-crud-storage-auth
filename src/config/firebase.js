// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

//Please fill your own firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "fir-tuts-4a4c9",
  storageBucket: "fir-tuts-4a4c9.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-QL64T7TF0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)

export const storage = getStorage(app)