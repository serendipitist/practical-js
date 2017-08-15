var http = require('http');

var server = http.createServer(function (request, response){
   response.end("I am here");
   console.log("server is up")
});

server.listen(4000);
