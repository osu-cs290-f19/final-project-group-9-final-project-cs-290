/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Kyle Rosenau
 * Email: rosenauk@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000;

var exphbs = require('express-handlebars');
var app = express();


var postData = require('./postData');
//console.log("== postData:", postData);


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




app.get('/', function (req, res){
  res.status(200).render('PostContainer', {SellCard: postData});
});
app.use(express.static('public'));


var availablePosts = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7'
];


app.get('/posts/:numPost', function (req, res, next) {
  var numPost = req.params.numPost;
  if (availablePosts.indexOf(numPost) >= 0) {
    // res.status(200).sendFile(
    //   __dirname + '/public/people/' + person + '.html'
    // );
    // console.log("== peopleData[person]:", peopleData[person])
    res.render('OnePost', {
      // name: peopleData[person].name,
      // photoData: peopleData[person].photos
      description: postData[numPost].description,
      photoURL: postData[numPost].photoURL,
      price: postData[numPost].price,
      city: postData[numPost].city,
      condition: postData[numPost].condition
    });
  } else {
    next();
  }
});

// app.get('/', function (req, res) {
//   res.render('index');
// });
//
// app.get('/about', function (req, res) {
//   res.render('about', {
// 	price: postData.price,
// 	city: postData.city,
// 	condition: postData.condition,
// 	photoURL: postData.photoURL,
// 	description: postData.description
//   });
// });
//
 app.get('*', function (req, res) {
 res.status(404).render('404');
 });



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
