var express = require('express');
var db = require('./../db/db.js');
var parser = require('body-parser');
var path = require('path');

var app = express();
app.use(parser.json());
app.use('/static', express.static(path.join(__dirname + './../app')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + './../app/index.html'));
});



app.get('/users', function(req, res) {
	var queryString = "SELECT * FROM users";

	db.query(queryString, function(err, results) {
		res.send(JSON.stringify(results));
	});
});


app.post('/users', function(req, res) {
	console.log('POST SUCCESS!!');
	console.log('REQBODY: ', req.body);
	var firstName = req.body.first_name;
	var lastName = req.body.last_name;
	var age = req.body.age;
	
	var queryString = `INSERT INTO users (first_name, last_name, age) VALUES ("${firstName}", "${lastName}", ${age})`

	db.query(queryString, function(err, results) {
		res.send('Complete Post QUERY!');
	});

});












var server = app.listen(3000, function() {
	console.log('connected');
})