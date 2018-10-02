var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	//res.writeHead(200, {'content-type': 'text/html'});
	res.writeHead(200, {'content-type': 'text/plain'});
	var html = fs.readFileSync('./index.html');
	res.end(html);
}).listen(3000);
console.log('Server uruchomiony');