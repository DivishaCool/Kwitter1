
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAiLoeObJjPvRbubQZjT_tPytO1mgM0iy8",
      authDomain: "kwitter-cfd45.firebaseapp.com",
      databaseURL: "https://kwitter-cfd45-default-rtdb.firebaseio.com",
      projectId: "kwitter-cfd45",
      storageBucket: "kwitter-cfd45.appspot.com",
      messagingSenderId: "666376565063",
      appId: "1:666376565063:web:bf54bc07db3bd11ec99c62"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
