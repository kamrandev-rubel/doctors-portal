// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCmUcjDnhogqwUiWdZByoEOHWnh6LgdEo",
    authDomain: "doctors-portal-o.firebaseapp.com",
    projectId: "doctors-portal-o",
    storageBucket: "doctors-portal-o.appspot.com",
    messagingSenderId: "858734754855",
    appId: "1:858734754855:web:3e1f7b65997a2197cde202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;