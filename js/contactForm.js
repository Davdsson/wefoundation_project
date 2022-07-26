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
  var messagesRef = firebase.database().ref('VisitorMessage');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
  
    // Get values
    
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
     
  // Save message
    saveMessage(name,email,subject,message);
  
  
    
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
    
  }
  
  
  
  // Function to get  form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name,email,subject,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      email:email,
      subject:subject,
      message:message
    });
  }
  