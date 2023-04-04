//copied from firebase website
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
} from "firebase/auth"; //importing authentication service here
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA5dY6t9JPSvCaFgbZ0wxhCumDpJyRsbY",
    authDomain: "idev-therapist.firebaseapp.com",
    projectId: "idev-therapist",
    storageBucket: "idev-therapist.appspot.com",
    messagingSenderId: "491455013311",
    appId: "1:491455013311:web:c38ddc499eb735e415410a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); //I exported,so we`re gonna use it evrywhere
export const googleProvider = new GoogleAuthProvider(); //Google method
export const facebookProvider = new FacebookAuthProvider(); //faceBook method
