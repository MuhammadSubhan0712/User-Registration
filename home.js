
import { getAuth, onAuthStateChanged , signOut} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth , db} from "./config.js";

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore-compat.js"; 


// When user login:
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

const form_todo = document.querySelector('#form-todo');

const todos = document.querySelector('#todo');

const display = document.querySelector('#ul');

const todo_arr = [{}];

const db = getFirestore(app);

form_todo.addEventListener('submit' ,(events)=>{
  events.preventDefault();
  console.log(todos.value);

  // try {
  //   const docRef = await addDoc(collection(db, "todos"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  todo_arr.push(todos.value)
  renderdata();
});


function renderdata(){
display.innerHTML += `<li>${todo_arr}</li>`;
}
