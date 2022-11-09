// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1e45XTppZ8HF0AQM5AHBlF5j6lH2pRyo",
    authDomain: "rsquare-e51b2.firebaseapp.com",
    projectId: "rsquare-e51b2",
    storageBucket: "rsquare-e51b2.appspot.com",
    messagingSenderId: "87418715415",
    appId: "1:87418715415:web:27b5e47f8847fec3ea4b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth