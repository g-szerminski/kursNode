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