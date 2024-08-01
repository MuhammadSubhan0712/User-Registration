import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import {
  collection,
  addDoc,
  getDocs,
  doc, 
  deleteDoc,
  updateDoc ,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { auth, db } from "./config.js";


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

const select =  document.querySelector("#select");

const todo_arr = [];

// ---------------------------------------------------------


// Asynchronous Function to read the data:
async function readdata() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    todo_arr.push({...doc.data() , id: doc.id});
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
    display.innerHTML += `
    <li>${items.todo}   
     <button class="edit-btn"> Edit </button>
    <button class="delete-btn" style="background-color: red; color: #fff;"> Delete </button></li>
    `;
  });

// ---------------------------------------------------------

  
// Foreach Add Event listener for Edit Button:

const editBtn = document.querySelectorAll(".edit-btn");

editBtn.forEach((btn , index) =>{
  btn.addEventListener("click" , async()=>{
   const updatedval = prompt("Enter value to update");
   const toUpdate = doc(db, "todos", todo_arr[index].id);

await updateDoc(toUpdate, {
  todo : updatedval,
});
console.log("Value has been Updated");
todo_arr[index].todo = updatedval;
renderdata();

  });
});



// ---------------------------------------------------------

// Foreach Add Event listener for Delete Button:

const deleteBtn = document.querySelectorAll(".delete-btn");

deleteBtn.forEach((btn , index) => {

btn.addEventListener("click" , async () => {

  await deleteDoc(doc(db, "todos", todo_arr[index].id));
  console.log("Data Deleted Successfully");

  todo_arr.splice(index , 1);
  renderdata();
});
});
 
}


// ---------------------------------------------------------

// Add Event listener todo form:
form_todo.addEventListener("submit", async (events) => {
  events.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo: todos.value,
      Designation: select.value,
      time: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id)
    todo_arr.push({
      todo: todos.value,
      id: docRef.id,
      Designation: select.value,
    });
renderdata();
todos.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});


// ---------------------------------------------------------
