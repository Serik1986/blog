var express = require('express');
var app = express();

app.use( express.static( "views" ) );
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/create', function(req, res){
  res.render('create');
});
app.get('/photo', function(req, res){
    res.sendFile('__dirname'+ res);
  });

app.get('/prices', function(req, res){
    res.render('prices');
  });
  app.get('/contact', function(req, res){
    res.render('contact');
  });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


