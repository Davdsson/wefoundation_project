function upload(){
    //get your image
    var image=document.getElementById('image').files[0];
    //get your blog text
    var post=document.getElementById('post').value;
    //get image name
    var imageName=image.name;
    //firebase storage reference
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('PostedChild/').push().set({
                 text:post,
                 imageURL:downloadURL
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}

window.onload=function(){
    this.getdata();
}


function getdata(){
    firebase.database().ref('PostedChild/').once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById('posts');
      //remove all remaining data in that div
      posts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){

        //class="spon-bdr clearfix"
        
        posts_div.innerHTML="<div class='col-lg-3 col-sm-12 col-md-12' style='position:relative;float: right;'>"+
        "<div class='' style=' margin-top:10px' >"+
        "<img src='"+value.imageURL+"' style='height:280px;width:285px '; background:#f5f5f5'>"+
        "<div class='card-body' style='background:#f5f5f5;width:285px '><h4 style='font-size: 18px;text-transform: uppercase;color:#ec1d25;margin: 10px 0 0 0;line-height:26px;'>"+value.message+"</h4>"+
        "<p style='border-top:1px solid #ccc;margin-top:0px; padding-top:5px'>"+"Pays:"+value.pays+"</p>"+
       "<p style='border-top:1px solid #ccc;margin-top:5px; padding-top:5px'>"+"Age:"+value.age+"</p>"+"<p style='border-top:1px solid #ccc;margin-top:5px; padding-top:5px'>"+"Né le:"+value.date_naissance+"</p>"+
        "<button  class='btn1' .btn1:hover{background:red}  style=' background: #2f3191;border-radius: 3px;color: #fff;display: block;margin: 10px 10px;padding: 7px 15px;font-weight: 600;text-transform: uppercase; width:260px; border:2px solid #2f3191; .hover{ background: red}' id='"+key+"' onclick='delete_post(this.id)'>Sponsorisez moi</button>"+
        "</div></div></div>"+posts_div.innerHTML;

/*

"<div class='spon-bdr clearfix' style='border-top:1px solid #ccc;margin-top:5px; padding-top:5px; text-align:left'>"+"<div class='col-xs-3'>"+"Pays" +"</div>"+"<div class='col-xs-6'>"+value.pays +"</div"+"</div>"+
        
        "<div class='spon-bdr clearfix' style='border-top:1px solid #ccc;margin-top:5px; padding-top:5px; text-align:left'>"+"<div class='col-xs-3'>"+"Age" +"</div>"+"<div class='col-xs-6'>"+value.age+"</div"+"</div>"+

        "<div class='spon-bdr clearfix' style='border-top:1px solid #ccc;margin-top:5px; padding-top:5px; text-align:left'>"+"<div class='col-xs-3'>"+"date de naissance" +"</div>"+"<div class='col-xs-6'>"+value.age +"</div"+"</div>"+




        "<p>"+"Pays:"+ "</p>"+"<p  style='border-top:1px solid #ccc;margin-top:5px; padding-top:5px; text-align:right;'>"+value.pays+"</p>"+
       "<p>"+"Age:"+value.age+"</p>"+"<p>"+"Date de Naissance "+value.date_naissance+"</p>"

   style='border-top:1px solid #ccc;margin-top:5px; padding-top:5px; text-align:left;'
        posts_div.innerHTML="<div class='col-sm-3 mt-2 mb-1'>"+
        "<div class='card'>"+
        "<img src='"+value.imageURL+"' style='height:250px;'>"+
        "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
        "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Delete</button>"+
        "</div></div></div>"+posts_div.innerHTML;
        */
      }
    
    });
}

function delete_post(key){
   /* firebase.database().ref('blogs/'+key).remove();
    getdata();*/
    window.open('donate.html');
}

