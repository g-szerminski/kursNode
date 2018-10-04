var http = require('http');
http.createServer(function(req, res){
if(req.url === '/') {
	res.writeHead(200);
	res.end('Strona startowa');
} else if (req.url === '/products') {
	res.writeHead(200);
	res.end('Strona Produktu');
} else if (req.url === '/blog') {
	res.writeHead(200);
	res.end('Strona Blog');
}	else {
	res.writeHead(404);
	res.end('Strony nie znaleziono');
}
}).listen(3000);

console.log('Serwer uruchomiony...');