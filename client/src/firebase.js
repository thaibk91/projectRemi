// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVONenIGtXqmiB2tThUrDf9r9xPVaDbgI",
  authDomain: "video-4cde6.firebaseapp.com",
  projectId: "video-4cde6",
  storageBucket: "video-4cde6.appspot.com",
  messagingSenderId: "843236499524",
  appId: "1:843236499524:web:a3f6e34685600cffcc5c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;