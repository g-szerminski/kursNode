//video 8-3
var express = require('express');
var app = express();

app.set('view engine','jade');
/* Routing */
app.get('/', function(req, res){
	res.render('index', { header: 'Witaj na stronie Index'})
});
app.get('/contact', function(req, res){
	res.send('Strona Kontakt');
});
app.get('/product/:id', function(req, res){
	res.send('Wartość ID: ' + req.params.id);
});
app.listen(3000);

//video 8-2
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


//video 8-1
var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send('Witaj w Expressjs');
});
app.listen(3000);

//video 7-2
var us = require('underscore.string');
console.log(us.capitalize('testowy string'));

//video 6-7
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'});
	fs.createReadStream('./index.html').pipe(res);
	// var html = fs.readFileSync('./index.html');
	// res.end(html);
}).listen(3000);
console.log('Serwer uruchomiony...');

//video 6-6
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

//video 6-5
var http = require('http');
http.createServer(function(req, res){
	if (req.url === '/') {
		res.writeHead(200);
		res.end('Strona startowa');		
	} else if (req.url === '/products') {
		res.writeHead(200);
		res.end('Strona Produkty');				
	} else if (req.url === '/blog') {
		res.writeHead(200);
		res.end('Strona Blog');				
	} else {		
		res.writeHead(404);
		res.end('Strony nie znaleziono');				
	}
}).listen(3000);
console.log('Serwer uruchomiony...');

//video 6-4
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'});
	var html = fs.readFileSync('./index.html', 'utf8');
	var header = 'Strona startowa';
	html = html.replace('{ Header }', header);
	res.end(html);
}).listen(3000);
console.log('Serwer uruchomiony...');

//video 6-3
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	//res.writeHead(200, {'content-type': 'text/html'});
	res.writeHead(200, {'content-type': 'text/plain'});
	var html = fs.readFileSync('./index.html'); // Remember: create index.html file in the same folder for correct working of server !!!
	res.end(html);
}).listen(3000);
console.log('Server uruchomiony');

//video 6-2
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('! OK');
}).listen(3000);
console.log('Server uruchomiony');

//video 6-1
var http = require('http');
http.get('http://websamuraj.pl', function(res) {
	res.on('data', function(data) {
		console.log(data.toString());
	})	
	//console.log(res.statusCode);
});

//video 5-9
var fs = require('fs');
var readable = fs.createReadStream('./data.txt');
var writeable = fs.createWriteStream('./data_COPY.txt'); 
readable.pipe(writeable);

//video 5-8
var fs = require('fs');
var readable = fs.createReadStream('./data.txt', 'utf8');
var writeable = fs.createWriteStream('./data_COPY.txt');
readable.on('data', function(chunk) {
	//console.log(chunk);
	writeable.write(chunk);
});

//video 5-7
var bufer = new Buffer('Bufor');
bufer.write('abc');
console.log(bufer.toString());

var bufer = new Buffer('Bufor');
console.log(bufer[0]);

var bufer = new Buffer('Bufor');
console.log(bufer.toJSON());

var bufer = new Buffer('Bufor');
console.log(bufer.toString());
//---------------------------------------------
// video 5-5
//-------------USUWANIE KATALOGU--------------------
var fs = require('fs');
fs.rmdir('styles', function(error) {
	if(error) {
		console.error(error);
	} else {
		console.log('Katalog został usunięty');
	}
});
//------------ZMIANA NAZWY KATALOGU------------------
var fs = require('fs');
fs.rename('scripts', 'styles', function(error) {
	if(error) {
		console.error(error);
	} else {
		console.log('Nazwa katalogu została zmieniona');
	}
});
//-------------TWORZENIE KATALOGU--------------------
fs.mkdir('scripts', function(error) {
	if(error) {
		console.error(error);
	} else {
		console.log('Katalog został utworzony');
	}
});

// video 5-4
var fs = require('fs');
//var content = 'To jest NOWA zawartość';
var content = `<footer>
<div class='copy'>
	<p>Copyright</p>
</div>
</footer>`

fs.writeFile('footer.html', content, function(error) {
	console.error(error);
	console.log('Plik został utworzony');
});

//video 5-3
var fs = require('fs');
//var content = 'To jest NOWA zawartość';
var content = `<footer>
<div class='copy'>
	<p>Copyright</p>
</div>
</footer>`

fs.writeFile('footer.html', content, function(error) {
	console.error(error);
	console.log('Plik został utworzony');
});
------------------------------------------------------------------
//vide 5-2
var fs = require('fs');
fs.readFile('./modules.txt', 'utf8', function(error, content) {
	console.log(content);
});
-----------------------------------------------
//video 5-1
var fs = require('fs');
fs.readdir('./gdg', function(error, fileList) {
	console.error(error);
	console.log(fileList);
});

// var fs = require('fs');
// var fileList = fs.readdirSync('./');
// console.log(fileList);
---------------------------------------------------
//video 4-7
const readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Jak masz na imię ?', function(answer){
	rl.setPrompt('Jaki jest twój ulubiony język programowania ' + answer + ' ?');
	rl.prompt();
	rl.on('line', function(language) {
		console.log(language);
	rl.close();
	});

	// console.log(answer);
});

----------------------------------------------
// video 4-6
let currentTime = 0;
var interval = setInterval(function() {
	currentTime += 1000;
	console.log('Bieżący czas: ' + currentTime/1000 + 's');
}, 1000);
setTimeout(function() {
	clearInterval(interval);
}, 10000);
-----------------------------------------------------------
// video 4-5
process.stdout.write('Jak masz na imiê ? \n');
process.stdin.on('data', function(name) {
	console.log('Witaj: ' + name.toString());
	process.abort();
});

//process.setEncoding('utf8');

-----------------------------------------------
const events = require('events');
const emiter = new events.EventEmitter();
emiter.on('userRegisterd', function(username) {
	console.log(username + ': Witaj w naszym serwisie');
});
emiter.emit('userRegisterd', 'Szerman');
---------------------------------------------------
function showInfo(callback) {
	setTimeout(function() {
	console.log('Kurs Node.js')}, 2000);

----------------------------------------------------
	setTimeout(function() {
		callback();
	}, 4000);
}
showInfo(function() {
	console.log('Callback zosta³ wywo³any');
});
-------------------------------------------------------
var info = require('./info');
info.infoPolish();
info.infoEnglish();
------------------------------------------------------------
var path = require('path');
var basename = path.basename('user/files/documents', '.com');
console.log(basename);
----------------------------------------------------------------
var welcome = require('./functions.js');
welcome();