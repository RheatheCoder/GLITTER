var firebaseConfig = {
      apiKey: "AIzaSyAvsT85wPdFgC4Kb8DcljXkzF-NaLz4iZw",
      authDomain: "glitter-social-app.firebaseapp.com",
      databaseURL: "https://glitter-social-app-default-rtdb.firebaseio.com",
      projectId: "glitter-social-app",
      storageBucket: "glitter-social-app.appspot.com",
      messagingSenderId: "895154856727",
      appId: "1:895154856727:web:86568c58fd10e75b400d52"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name", user_name);
room_name = localStorage.getItem("room_name", room_name);

function send(){
      msg = document.getElementById("message"). value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("message").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
