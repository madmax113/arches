//Project Arches.
//HTTP Server 
//Author: meghan.desai@gmail.com
// reference the http module so we can create a webserver
var http = require("http");
var url = require("url");

var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var path = url.parse(request.url,true).pathname;
  response.send('Welcome to the Project Arches Prototype!\n'+path);
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});


    
     //var path = url.parse(request.url,true).pathname;
     
     //if(path=='/input/'){
     
      // Parse the request for arguments and store them in _get variable. 
      // This function parses the url from request and returns object representation. 
     // var _get = url.parse(request.url, true).query; 
      // Write headers to the response. 
      //response.writeHead(200, { 
        // 'Content-Type': 'text/plain'
      //}); 
      // Send data and end response. 
     // response.end("Project Arches Prototype\n" + clientResp.message(_get['data'])); }
   
