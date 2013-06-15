//Project Arches.
//HTTP Server 
//Author: meghan.desai@gmail.com
// reference the http module so we can create a webserver
var http = require("http");
var url = require("url");
var router = require("./router.js");
var clientResp = require('./clientResp.js');

// create a server
http.createServer(function(request, response) {
// Attach listener
 request.on('end', function () { 
     
     
     var path = url.parse(request.url,true).pathname;
     
     if(path=='/input/'){
     
      // Parse the request for arguments and store them in _get variable. 
      // This function parses the url from request and returns object representation. 
      var _get = url.parse(request.url, true).query; 
      // Write headers to the response. 
      response.writeHead(200, { 
         'Content-Type': 'text/plain'
      }); 
      // Send data and end response. 
      response.end("Project Arches Prototype\n" + clientResp.message(_get['data'])); }
      else{
          response.end("Project Arches Prototype\nNo Parameters Detected!");
      }
      
      
   }) ;
}).listen(process.env.PORT||5000);

