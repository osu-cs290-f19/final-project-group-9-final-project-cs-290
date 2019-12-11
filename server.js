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

  app.get('/categories', function(req, res){
    res.status(200).render('photos');
  });


app.use(express.static('public'));


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
