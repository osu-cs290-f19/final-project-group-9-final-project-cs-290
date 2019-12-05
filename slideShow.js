var myIndex = 0;
		bubble();
		
		function bubble() {
		  var i;
          var x = document.getElementsByClassName("mySlides");
          var y = document.getElementsByClassName("info");
		  for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
            y[i].style.display = "none";  
		  }
		  myIndex++;
          if (myIndex > x.length) 
          {
              myIndex = 1
          }    
          x[myIndex-1].style.display = "block";  
          y[myIndex-1].style.display = "block"; 
		  setTimeout(bubble, 3000); // Change image every 3 seconds
		}