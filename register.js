import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const display = document.querySelector("#div");

form.addEventListener("submit", (events) => {
  events.preventDefault();

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)

    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      display.innerHTML = `Registration Done`;
      email.value = "";
      password.value = "";
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      display.innerHTML = `${errorMessage}`;
    });
});


// Goggle Button Work:

auth.languageCode = "en";

//Calling the GoggleAuthProvider function
const provider = new GoogleAuthProvider();

const goggle_btn = document.querySelector("#goggle-btn");

goggle_btn.addEventListener("click", () => {
const auth = getAuth();
  signInWithPopup(auth, provider)
  
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location = "./Home.html";
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Occured", errorMessage);
      display.innerHTML = `${errorMessage}`;
    });
});


// Github Button Work:
const github_btn = document.querySelector('#github-btn');

//Calling the GithubAuthProvider function
const providers = new GithubAuthProvider();

github_btn.addEventListener('click' , ()=>{
    const auth = getAuth();
    signInWithPopup(auth, providers)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
      window.location = "./Home.html";
      
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Occured:",errorMessage);

      });
})


