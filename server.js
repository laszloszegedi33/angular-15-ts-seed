var PORT = 3000;

var express = require('express');
var app = express();
var path = require('path');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/system.config.js', express.static(__dirname + '/system.config.js'));
app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function() {
    console.log('App started.  http://localhost: ' + PORT);
});