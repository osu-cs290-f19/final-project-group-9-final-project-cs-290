var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;

var Postdata = require('./CategoryPost');



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
    res.status(200).render('category', {CatCard : Postdata});
  });

//   var availableCategories = [
//     'Classes',
//     'registration',
//     'Events',
//     'Tech Guides',
//     'osuvs',
//     'General Guides'
//   ];
//
// app.get('/category/:catname', function(req, res){
//   //console.log(req);
//   var catname = req.params.catname;
//   console.log(catname);
//   if (availableCategories.indexOf(catname) >= 0){
//     console.log("Working");
//     res.render(catname);
//       app.use(express.static('public'));
//   }
//   else {
//     res.render('404');
//   }
// });

app.get('/registration', function(req, res){
  res.status(200).render('registration');
});

app.get('/osuvs', function(req, res){
  res.status(200).render('osuvs');
});

app.get('/events', function(req, res){
  res.status(200).render('events');
});

app.get('/techguide', function(req, res){
  res.status(200).render('techguide');
});

app.get('/generalguide', function(req, res){
  res.status(200).render('underconstruction');
});

app.get('/classes', function(req, res){
  res.status(200).render('underconstruction');
});

app.get('/suggestion', function(req, res){
  res.status(200).render('suggestion');
});

app.get('/report', function(req, res){
  res.status(200).render('report');
});

app.get('/help', function(req, res){
  res.status(200).render('underconstruction');
});

app.get('/about', function(req, res){
  res.status(200).render('underconstruction');
});


app.use(express.static('public'));


app.get('*', function (req, res) {
 res.status(404).render('404');
 });


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
