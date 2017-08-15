var express = require('express');
var app = express();

app.get('/blocks', function(req, res) {

  var blocks = ['fixed' , 'Movable' , 'Rotating'];
  response.json(blocks);

  //respone.end();
});

/* order of theroutes is very important */
app.get('/big.*/' , function(req, res) {
  console.log("Big access");
})

app.listen(4000 , function() {
  console.log("I am listening to port 4000");
   console.log("aut 1");
  });
