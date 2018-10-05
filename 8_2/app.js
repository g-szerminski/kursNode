var express = require('express');

var app = express();

/* Routing */
app.get('/', function(req, res){
	res.send('Strona Start');
});
app.get('/contact', function(req, res){
	res.send('Strona Kontakt');
});
app.get('/product/:id', function(req, res){
	res.send('Wartość ID: ' + req.params.id);
});
app.listen(3000);