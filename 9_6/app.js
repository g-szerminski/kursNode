var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db){
	if (err) {
		console.log(err);
	} else {
		console.log('Połączono z bazą');
		insertUsers(db, function(){
			db.close();	
		});
	}
});

var insertUsers = function(db, callback) {
	var collection = db.collection('users');
	var user1 = {'name': 'user1', 'password': 'abcdefg'};
	var user2 = {'name': 'user2', 'password': 'drwed453'};
	collection.insert([user1,user2], function(err, result){
		if (err) {
			console.log(err);
		} else {
			console.log('Dodano nowych użytkowników');
			callback(result);
		}
	})
}