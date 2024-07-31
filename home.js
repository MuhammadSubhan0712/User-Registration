import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth, db } from "./config.js";

import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";



// When user login:
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    window.location = "index.html";
  }
});

// ---------------------------------------------------------
// Logout button Working:

const logout = document.querySelector("#logout-btn");

logout.addEventListener("click", () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Logout succesfully");
      window.location = "index.html";
    })
    .catch((error) => {
      console.log(error);
    });
});


// ---------------------------------------------------------


// To do Working starts here:

const form_todo = document.querySelector("#form-todo");

const todos = document.querySelector("#todo");

const display = document.querySelector("#ul");

const todo_arr = [];

// ---------------------------------------------------------


// Asynchronous Function to read the data:
async function readdata() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id}`);
    todo_arr.push(doc.data());
  });
  console.log(todo_arr);
  renderdata();
}

readdata();
// ---------------------------------------------------------


// Function to render todo data on the browser:
function renderdata() {
  display.innerHTML = "";
  if (todo_arr.length === 0) {
    display.innerHTML = `No data found`;
    return;
  }
  todo_arr.map((items) => {
    display.innerHTML += `<li>${items.todo}
<button class="Edit-btn">Edit</button>
<button class="Delete-btn">Delete</button>
    </li>`;
  });
}



// ---------------------------------------------------------

// Add Event listener todo form:
form_todo.addEventListener("submit", async (events) => {
  events.preventDefault();
  todo_arr.push({
    todo: todos.value,
  });
  renderdata();

  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo: todos.value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

// ---------------------------------------------------------

// Add Event listener for Edit Button:

const editBtn = document.querySelector('.Edit-btn');


// ---------------------------------------------------------

// Add Event listener for Delete Button:

const deleteBtn = document.querySelector('.Delete-btn');
