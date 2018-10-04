var http = require('http');
http.createServer(function(req, res){
	var data = {
		id: 456,
		name: 'node.js',
		category: 'js'
	};
	res.writeHead(200, {'content-type': 'application/json'});
	res.end(JSON.stringify(data));
}).listen(3000);
console.log('Serwer uruchomiony...');