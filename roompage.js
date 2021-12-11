var firebaseConfig = {
  apiKey: "AIzaSyCrr-p8JuAYXpjkVCYajqx__prGqv5lFeo",
  authDomain: "letschat-689ab.firebaseapp.com",
  databaseURL: "https://letschat-689ab-default-rtdb.firebaseio.com",
  projectId: "letschat-689ab",
  storageBucket: "letschat-689ab.appspot.com",
  messagingSenderId: "1078859178788",
  appId: "1:1078859178788:web:f05d02b30560cdca7d09b1",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout(){
    window.location="index.html";
    localStorage.removeItem("user_name");
}

function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"roomname"
  });
  localStorage.setItem("room_name",room_name);
  window.location="chatroom.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
    
      row = "<div class = 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      
    });
  });
}
getData();

function redirectToRoomName(name){
  console.log(name);
  window.location="chatroom.html";
  localStorage.setItem("room_name",room_name);
}