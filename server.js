// reference the http module so we can create a webserver
var http = require("http"), url = require("url");

// create a server
http.createServer(function(request, response) {
// Attach listener on end event. 
   request.on('end', function () { 
      // Parse the request for arguments and store them in _get variable. 
      // This function parses the url from request and returns object representation. 
      var _get = url.parse(request.url, true).query; 
      // Write headers to the response. 
      response.writeHead(200, { 
         'Content-Type': 'text/plain'
      }); 
      // Send data and end response. 
      response.end('Here is your data: ' + _get['data'] + ',' + _get['data2']); 
   }); 
}).listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console
