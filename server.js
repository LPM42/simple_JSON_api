var express = require('express');
var http = require('http');
var app = express();
var time = require('time');

var now = new time.Date();

app.get('/', function (request, response) {
  response.send('Local time is: ' + now +".")
});

app.get('/:name', function (request, response) {
  response.send({'greeting': 'Hello ' + request.params.name + ', how are you today?' })
});

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('Server is running on port 3000.');
});

