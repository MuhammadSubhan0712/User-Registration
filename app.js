import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const display = document.querySelector("#div");

form.addEventListener("submit", (events) => {
  events.preventDefault();

  signInWithEmailAndPassword(auth, email.value, password.value)

    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = 'Home.html';
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      display.innerHTML = `${errorMessage}`;
      
    });
});
