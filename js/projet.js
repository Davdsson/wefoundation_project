
window.onload=function(){
    this.getdata();
}


function getdata(){
    firebase.database().ref('Projets/').once('value').then(function(snapshot){
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
        
        posts_div.innerHTML="<div class='col-lg-4 col-sm-12 col-md-12' style='position:relative;float: right;'>"+
        "<div class='' style=' margin-top:10px' >"+
        "<img src='"+value.imageURL+"' style='height:280px;width:380px; height:300px ' background:#f5f5f5'>"+
        "<div class='card-body' style='background:#f5f5f5;width:380px '><h4 style='font-size: 18px;text-transform: uppercase;color:#ec1d25;margin: 10px 0 0 0;line-height:26px;'>"+value.titre+"</h4>"+
        "<p style='border-top:1px solid #ccc;margin-top:0px; padding-top:5px'>"+value.detail+"</p>"+
       "<button  class='btn1' style=' background: white;border-radius: 3px;color: blue;display: block;margin: 10px 10px;padding: 7px 15px;font-weight: 600;text-transform: uppercase; width:280px; border:2px solid #2f3191;margin-left:50px' id='"+key+"' onclick='delete_post(this.id)'>Faites un don maintenant</button>"+
        "</div></div></div>"+posts_div.innerHTML;

      }
    
    });
}

function delete_post(key){
   /* firebase.database().ref('blogs/'+key).remove();
    getdata();*/
    window.open('donate.html');
}

