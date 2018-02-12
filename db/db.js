var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'tutorial'
});

con.connect(function(err) {
	if(err) {
		throw err;
	} else {
		console.log('Connected to DB...');
	}
});

module.exports = con;