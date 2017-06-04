var express = require('express');
var app = express();
var app = require('tinyapp');

app.get('/blocks', function(request, response) {

  var blocks = ['fixed' , 'Movable' , 'Rotating'];
  response.json(blocks);
  //respone.end();
});

app.listen(4000 , function() {
  console.log("I am listening to port 4000");
  });
