// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg5p0HWGSwcHCySpv3SZgjNDwTRFP2nrU",
  authDomain: "my--firebase-auth.firebaseapp.com",
  projectId: "my--firebase-auth",
  storageBucket: "my--firebase-auth.appspot.com",
  messagingSenderId: "831671454957",
  appId: "1:831671454957:web:0d1dae4cae461503ff10e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;