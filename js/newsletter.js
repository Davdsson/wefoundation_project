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
  var messagesRef = firebase.database().ref('News_Letter_Suscribers');
  
  // Listen for form submit
  document.getElementById('newletterForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
  
    // Get values
    
   
    var mail = getInputVal('mail');
  
     
  // Save message
    saveMessage(mail);
  
  
    
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('newletterForm').reset();
  }
  
  
  
  // Function to get  form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(mail){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      
      mail:mail
      
    });
  }
  