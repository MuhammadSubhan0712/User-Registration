import {
    getAuth,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { auth } from "./config.js";
  

const form = document.querySelector('forgot-pasword');

const email = document.querySelector('email');
const forgot_btn = document.querySelector('forgot-btn');




