var fs = require('fs');

fs.readdir('./gdg', function(error, fileList) {
	console.error(error);
	console.log(fileList);
});

// var fs = require('fs');
// var fileList = fs.readdirSync('./');
// console.log(fileList);