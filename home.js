
import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);

  } else {
    window.location = 'index.html';
  }
});

// Logout button Working:

const logout = document.querySelector('#logout-btn');

logout.addEventListener('click' , () =>{
    const auth = getAuth();
signOut(auth).then(() => {
 console.log('Logout succesfully');
 window.location = 'index.html';

}).catch((error) => {
  console.log(error);
});
})


// To do Working starts here:

const form_todo = document.querySelector('#form');

const todos = document.querySelector('#todo');

const display = document.querySelector('#ul');

form_todo.addEventListener('submit' , (events)=>{
  events.preventDefault();
  console.log(todos.value);
  display.innerHTML += `<li>${todos.value}</li>`
  
})