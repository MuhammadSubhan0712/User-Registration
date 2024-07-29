
import { getAuth, onAuthStateChanged , signOut} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth , db} from "./config.js";

import { collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 


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

const todo_arr = [];


// Function to render todo data on the browser.
function renderdata(){
  display.innerHTML = "";
  if (todo_arr.length === 0) {
    display.innerHTML = `No data found`;
    return;
  }
todo_arr.map((items)=>{
display.innerHTML += `<li>${items.todo}</li>`;
})
}


form_todo.addEventListener('submit' ,async(events)=>{
  events.preventDefault();
  todo_arr.push ({
    todo : todos.value,
  });
  renderdata();

  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo : todos.value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

