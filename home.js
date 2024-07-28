
import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


const auth = getAuth();
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