var express = require('express');
var path = require('path');

var app = express();

// middleware
app.use(express.static(path.join(__dirname, './../client')));

// app.get('/', function(req, res) {
  
// });
// app.post('/', function(req, res){

// });

app.listen(3000);

console.log("Created server running on http://localhost:3000");
