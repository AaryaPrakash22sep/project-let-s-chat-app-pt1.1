var firebaseConfig = {
    apiKey: "AIzaSyA1m-4RJlggHcskYaHCMypGlna7S5bM3bE",
    authDomain: "kwitter-cb2d5.firebaseapp.com",
    projectId: "kwitter-cb2d5",
    storageBucket: "kwitter-cb2d5.appspot.com",
    messagingSenderId: "323022726579",
    appId: "1:323022726579:web:5e7d17a306da47833d97c6"
  };
  
  // Initialize Firebase
  firebase. app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
