import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {auth} from './config.js'

const form  = document.querySelector('#form');
const email  = document.querySelector('#email');
const password  = document.querySelector('#password');
const display = document.querySelector('#div');

form.addEventListener('submit' , (events) => {
      events.preventDefault();

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
console.log(user);
display.innerHTML = `Registration Done`;
email.value = '';
password.value = '';
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
console.log(errorMessage);
display.innerHTML = `${errorMessage}`;
        });
}
)


// Goggle Button Work:
const app = initializeApp(firebaseConfig);
const auth  = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


const goggle_btn = document.querySelector('goggle-btn');


goggle_btn.addEventListener('click' , ()=>{
    
    signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
 
  })
  .catch((error) => {

    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

  });

})
