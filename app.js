 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase, ref, set, onValue, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBi3VK63m0DdFC1VhgtrdJzRmGflrlOej4",
    authDomain: "javascript10-f88b3.firebaseapp.com",
    databaseURL: "https://javascript10-f88b3-default-rtdb.firebaseio.com",
    projectId: "javascript10-f88b3",
    storageBucket: "javascript10-f88b3.appspot.com",
    messagingSenderId: "744739698761",
    appId: "1:744739698761:web:9ab7c3e6e2443819dc2798",
    measurementId: "G-M26NSY6NDZ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
 
 



window.submitDAta = function(){
window.location.assign("student.html")

 

   var Email = document.getElementById('Email').value;
   var showemail = document.getElementById('showemail');
   var password = document.getElementById('Password').value;
   var showpass = document.getElementById('showpass');
  

  showemail.innerHTML = Email
  showpass.innerHTML = password
  

  var userId = Math.random().toString().slice(2);
  var userEmail = Email
  var userPassword = password


  //  firebase.database().ref('name/' + userId).set()
   set(ref(database, 'form/' + userId), {
  userEmail,
   userPassword,
   
   });
}

function getData(){
  const countData = ref(database, 'form');
  onValue(countData, (caldata) => {
  const data = caldata.val();
  console.log(data);
});
}
getData()