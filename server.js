var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/static', express.static('public'));

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});
/*
Template
*/
app.get('/first_template', function(req, res){
   res.render('first_view');
});
app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com",
      user: {name: "Ayush", age: "20"}
   });
});

app.get('/components', function(req, res){
   res.render('content');
});

app.use('/', function(req, res){
   console.log('EndFileok');
});

var server = app.listen(3000,'localhost', function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})