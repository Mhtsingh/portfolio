// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtuPG0SCz6hqRdS3l9pZ5BkdmW_jOz6CU",
  authDomain: "portfolio-91218.firebaseapp.com",
  projectId: "portfolio-91218",
  storageBucket: "portfolio-91218.appspot.com",
  messagingSenderId: "489914733366",
  appId: "1:489914733366:web:b7905a67da6a5afd4e1997",
  measurementId: "G-NGKLPNBMJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);