var fs = require('fs');

fs.readFile('./modules.txt', 'utf8', function(error, content) {
	console.log(content);
});