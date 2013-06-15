//Project Arches.
//HTTP Server 
//Author: meghan.desai@gmail.com
// reference the http module so we can create a webserver
var express = require("express");
var app = express();
app.use(express.logger());
var intro = 'Welcome to the Project Arches Prototype! ';

app.get('/', function(request, response) {
  response.send(intro + 'You provided no paramaters!');
});


app.get('/input/', function(req, res){
  res.send(intro + "\n\n" + req.param('data'));
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

