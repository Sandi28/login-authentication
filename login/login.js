import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value,
      };
      signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function (success) {
        alert("logined Successfully")
      window.location.href = "secure.html";
        var aaaa =  (success.user.uid);
        localStorage.setItem("uid",aaaa)
        console.log(aaaa)
})  
.catch(function (err) {
  alert("login error"+err);
});
          console.log(obj);
    
      

     
    
    }


      		  		  
   







  