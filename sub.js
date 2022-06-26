  
	bully = document.getElementById('bully')
  bully.addEventListener('click', event => {
      var title = document.getElementById('para')
      var x = document.getElementById("whole");
      var y = document.getElementById("cyberbully");
     	var z = document.getElementById("back");
      if (x.style.display === "none") {
        x.style.display = "block";
         y.style.display = "none";
       	z.style.display = "none";
      } else {

        x.style.display = "none";
      	y.style.display = "block";
      	z.style.display = "block";
      }
       title.innerText = 'CYBERBULLY';
    });

	 scam = document.getElementById('scam')
	scam.addEventListener('click', event => {
    var title = document.getElementById('para');
      var x = document.getElementById("whole");
      var y = document.getElementById("cyberscam");
      var z = document.getElementById("back");
  		
      if (x.style.display === "none") {
        x.style.display = "block";
         y.style.display = "none";
         z.style.display = "none";
      } else {
        x.style.display = "none";
      	y.style.display = "block";
      	z.style.display = "block";
      }
       title.innerText = 'ONLINE SCAM';
    })
	; 


	crime = document.getElementById('identity-theft')
	crime.addEventListener('click', event => {
      var title = document.getElementById('para');
      var x = document.getElementById("whole");
      var y = document.getElementById("theft");
      var z = document.getElementById("back");
      if (x.style.display === "none") {
        x.style.display = "block";
         y.style.display = "none";
         z.style.display = "none";
      } else {
        x.style.display = "none";
      	y.style.display = "block";
      	z.style.display = "block";
      }
       title.innerText = 'IDENTITY THEFT';
    })
	; 


	friends = document.getElementById('friends')
	friends.addEventListener('click', event => {
    var title = document.getElementById('para');
      var x = document.getElementById("whole");
      var y = document.getElementById("cyberfriends");
   var z = document.getElementById("back");
      if (x.style.display === "none") {
        x.style.display = "block";
         y.style.display = "none";
         z.style.display = "none";
      } else {
        x.style.display = "none";
      	y.style.display = "block";
      	z.style.display = "block";
      }
          title.innerText = 'ONLINE FRIENDS';
    })
	; 

