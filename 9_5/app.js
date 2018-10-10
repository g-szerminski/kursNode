var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
	if(err) {
		console.log(err);
	}	else {
		console.log('Połączono z bazą');
	}
	db.close();
});