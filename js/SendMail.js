function SendMailer(){
if(document.getElementById("name").value==""){
    document.getElementById("name").style.borderBlockColor='#FF0000';
    document.querySelector('.alert').style.color = '#FF0000';
    document.querySelector('.alert').innerHTML="SVP Entrez Votre Nom complet ";
    document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
    document.getElementById("name").style.borderBlockColor='black';

  document.querySelector('.alert').style.display = 'none';
},3000);
    return;
}
if(document.getElementById("email").value==""){
    document.getElementById("email").style.borderBlockColor='#FF0000';
    document.querySelector('.alert').style.color = '#FF0000';
    document.querySelector('.alert').innerHTML="SVP Entrez Votre Email ";
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.getElementById("email").style.borderBlockColor='black';
      document.querySelector('.alert').style.display = 'none';
    },3000);
    return;
}
if(document.getElementById("subject").value==""){
    document.getElementById("subject").style.borderBlockColor='#FF0000';
    document.querySelector('.alert').style.color = '#FF0000';
    document.querySelector('.alert').innerHTML="SVP Entrez le Sujet ";
    document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
    document.getElementById("subject").style.borderBlockColor='black';
  document.querySelector('.alert').style.display = 'none';
},3000);
    return;
}
if(document.getElementById("message").value==""){
    document.getElementById("message").style.borderBlockColor='#FF0000';
    document.querySelector('.alert').style.color = '#FF0000';
    document.querySelector('.alert').innerHTML="SVP Entrez Votre Message ";
    document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
    document.getElementById("message").style.borderBlockColor='black';

  document.querySelector('.alert').style.display = 'none';
},3000);
    return;
}
var params = {
from_name : document.getElementById("name").value,
email_id : document.getElementById("email").value,
subject : document.getElementById("subject").value,
message : document.getElementById("message").value,

}
emailjs.send("service_itupm1g","template_w4cux6b",params).then(function (res){

//alert("Success"+res.status);

// Show alert
document.querySelector('.alert').style.color = 'green';
document.querySelector('.alert').innerHTML="Votre Message a été envoyé avec success ";

document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
//document.getElementById('SponsorForm').reset();
document.getElementById("name").value="" ,
document.getElementById("email").value="",
document.getElementById("subject").value="",
document.getElementById("message").value=""
})
}