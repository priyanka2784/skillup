import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr_q6KRjLCfctHZRLUDowEJeoQeNZQZQE",
  authDomain: "skillup-f1df8.firebaseapp.com",
  projectId: "skillup-f1df8",
  storageBucket: "skillup-f1df8.firebasestorage.app",
  messagingSenderId: "1021711823088",
  appId: "1:1021711823088:web:ce357c78534713751c1235",
  measurementId: "G-Q3MZ88DHZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
