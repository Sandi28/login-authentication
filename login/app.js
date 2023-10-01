
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  
  const firebaseConfig = {
    apiKey: "AIzaSyB-Bb3dpTZeK1ZIHxZQrdlV5i5mX73jor0",
    authDomain: "signup-authentication-176bd.firebaseapp.com",
    projectId: "signup-authentication-176bd",
    storageBucket: "signup-authentication-176bd.appspot.com",
    messagingSenderId: "364577475732",
    appId: "1:364577475732:web:f191ac23841e87ae937881"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.Submit = function (e) {
 
    e.preventDefault();
    var obj = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
  
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
      alert("signup successfully")
      window.location.href = "login.html";
    })
    .catch(function(err){
      alert("Error in " + err)
    })
   
    console.log(obj)

    
};
