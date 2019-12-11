var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;



app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, "views/layouts/")}));

  app.set('view engine', 'handlebars');

  app.get('/', function(req, res){
    res.status(200).render('mainpage');
  });

  app.get('/photos', function(req, res){
    res.status(200).render('photos');
  });

  app.get('/category', function(req, res){
    res.status(200).render('category');
  });
  app.use(express.static('public'));
  var availableCategories = [
    'Classes',
    'registration',
    'Events',
    'Tech Guides',
    'osuvs',
    'General Guides'
  ];

app.get('/category/:catname', function(req, res){
  //console.log(req);
  var catname = req.params.catname;
  console.log(catname);
  if (availableCategories.indexOf(catname) >= 0){
    console.log("Working");
    res.render(catname);
      app.use(express.static('public'));
  }
  else {
    res.render('404');
  }
});



app.get('*', function (req, res) {
 res.status(404).render('404');
 });


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
