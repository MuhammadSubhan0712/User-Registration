import {
    getAuth,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { auth } from "./config.js";
  

const form = document.querySelector('#form');

const email = document.querySelector('email');
const forgot_btn = document.querySelector('forgot-btn');

const display = document.querySelector('#div');

form.addEventListener('submit' , (events)=>{
events.preventDefault();

sendPasswordResetEmail(auth, email.value)
.then((forgot_pass)=>{
    forgot = forgot_pass;
    display.innerHTML = `<p>Password reset email sent!.</p>`;
    console.log(forgot);
})
.catch((error)=>{
errorcode = error.code;
errorMessage = error.message;
display.innerHTML = `<p>Error Occured: ${errorMessage}</p>`;
console.log("Error Occured" , errorMessage);
})
})
