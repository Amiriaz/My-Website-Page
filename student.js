
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase, ref, set, onValue,} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAnZSx2KAslY2ELF1Un88iQFIiZmH9zBYY",
   authDomain: "submission-form-f613e.firebaseapp.com",
   databaseURL: "https://submission-form-f613e-default-rtdb.firebaseio.com",
   projectId: "submission-form-f613e",
   storageBucket: "submission-form-f613e.appspot.com",
   messagingSenderId: "39312077409",
   appId: "1:39312077409:web:85384178958cad75c97020",
   measurementId: "G-NMW1YV3PJN"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase(app);
 var parent = document.getElementById("parent");
 

 function getStudentData(){
    const refernce = ref(db, "student/");
    let arr = [];
    onChildAdded(refernce,function(x){
arr.push(x.val());
parent.innerHTML = "";
for(var i = 0; i <arr.length; i++){
    parent.innerHTML += `alert`
   
}
        console.log;

    });
 }
 getStudentData();