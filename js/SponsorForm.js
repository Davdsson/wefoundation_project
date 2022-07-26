// Initialize Firebase (ADD YOUR OWN DATA)

var config = {
  apiKey: "AIzaSyCcBuFYQorMjnGOZGHaKP9QX5fmSAbaRoY",
    authDomain: "saliproject.firebaseapp.com",
    databaseURL: "https://saliproject-default-rtdb.firebaseio.com",
    projectId: "saliproject",
    storageBucket: "saliproject.appspot.com",
    messagingSenderId: "595340957596",
    appId: "1:595340957596:web:8b8365b5deb36bae6e9a59"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Sponsors');

// Listen for form submit
document.getElementById('SponsorForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();


  // Get values
  
  var name = getInputVal('name');
  var lastname = getInputVal('lastname');
  var tel = getInputVal('tel');
  var email = getInputVal('email');
  var address = getInputVal('address');
  var city = getInputVal('city');
  var country = getInputVal('country');
  var amount = getInputVal('amount');
  var message = getInputVal('message');
   
// Save message
  saveMessage(name,lastname,tel ,email, address, city,country,amount,message);


  
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('SponsorForm').reset();
  
}



// Function to get  form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,lastname,tel ,email, address, city,country,amount,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    lastname:lastname,
    tel:tel ,
    email:email,
    address:address,
    city:city,
    country:country,
    amount:amount,
    message:message
  });
}
