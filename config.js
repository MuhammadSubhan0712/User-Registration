
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAQTyRrGzF5A832HR1DcA2TC52YyMwWTcA",
  authDomain: "user-registration-f2a23.firebaseapp.com",
  projectId: "user-registration-f2a23",
  storageBucket: "user-registration-f2a23.appspot.com",
  messagingSenderId: "7486919946",
  appId: "1:7486919946:web:aa53ce2e8d908a0198d6f3",
  measurementId: "G-4SJWSD9ZKY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
