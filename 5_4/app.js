var fs = require('fs');

// fs.unlink('footer.html', function(error) {
// 	if (error) {
// 		console.error(error);
// 	};
// 	console.log('File was deleted');
// });

fs.rename('plik.txt', 'readme.txt', function(error) {
	if (error) {
		console.error(error);
	}; 
	console.log('Nazwa pliku została zmieniona');
});