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

    var id;
    document.addEventListener('click',function(event){


      id = event.target;
      var p = id.src;
      if(event.target.id == "image")
      modal.style.display = "block";
      modalImg.src = id.src;
      captionText.innerHTML = id.alt;

    });
    // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById(String(id));
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var section = document.getElementsByClassName("container-b");

function checkForTxt()
{
    var userInputTxt = document.getElementById("filter-text");

    var filter1 = userInputTxt.value.toUpperCase();

    var itemsByName = section;
    for( var i = itemsByName.length - 1; i >= 0; i--)
    {
            //sort by itemName
            a = itemsByName[i].getElementsByTagName("img")[0];
            txtValue = a.alt;


            if(txtValue.toUpperCase().indexOf(filter1) > -1)
            {

                itemsByName[i].style.display = "";

            }
            else
            {
                itemsByName[i].remove();
            }

    }

}


var input = document.getElementById("filter-update-button").addEventListener("click", function(event)
{
    var userInputTxt = document.getElementById("filter-text");
    var filter1 = userInputTxt.value.toUpperCase();


    if (filter1 != "") //if there is text
    {
        checkForTxt();
    }

});
