

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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";
    function addRoom(){
          room_name= document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names");
       row = "<div class='room_name' id="+ Room_names + " onclick= 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>"
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room name", name);
window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}