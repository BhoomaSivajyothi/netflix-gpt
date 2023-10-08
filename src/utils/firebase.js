// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB12Tbtt-4p2SiqTT_WdscVnWDXX2RUpcw",
  authDomain: "netflix-gpt-14325.firebaseapp.com",
  projectId: "netflix-gpt-14325",
  storageBucket: "netflix-gpt-14325.appspot.com",
  messagingSenderId: "152292144064",
  appId: "1:152292144064:web:bd02ebd4629d5105838e25",
  measurementId: "G-ZBFLSCE7EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();