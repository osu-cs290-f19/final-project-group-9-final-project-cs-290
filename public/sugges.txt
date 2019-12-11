var submit_button = document.getElementById('myButton');

submit_button.addEventListener('click', function (event) {
  var title = document.getElementById("sub-box").value;
  var description = document.getElementById("des-box").value;

  if (title == "" || description == "") {window.alert('You Have Not Filled In All The Fields');}
  //add to drop down menu
  var aprob = document.getElementById("all-posts");

  var firstdiv = document.createElement('div');
  firstdiv.classList.add('post');
  firstdiv.title = title;
  firstdiv.description = description;

  var title1 = document.createElement('div');
  title1.classList.add('post-title-a');
  firstdiv.appendChild(title1);

  var title_a = document.createElement('span');
  title_a.classList.add('post-title');
  title_a.textContent = title;
  title1.appendChild(title_a);

  var description1 = document.createElement('div');
  description1.classList.add('post-description-a');
  firstdiv.appendChild(description1);

  var description_a = document.createElement('a');
  description_a.classList.add('post-description');
  description_a.textContent = description;
  description1.appendChild(description_a);

  aprob.appendChild(firstdiv);

  //clear everything
  document.getElementById("sub-box").value = "";
  document.getElementById("des-box").value = "";

});

// var all_comments = document.getElementById("all-comments");
//
// var first = document.createElement("div");
// first.classList.add("comment_section");
// first.comment
