// Load the http module for the server, and the fie system module to
// enable serving of html files
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond to all requests.
var server = http.createServer(function (request, response) {
    
  //get the URL that was used, if any
  var url = request.url || "";
  
  //read in an html template and serve it
  fs.readFile('default.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
  });
});

// Listen on c9 port
server.listen(process.env.PORT);

