var fs = require('fs');

var readable = fs.createReadStream('./data.txt');
var writeable = fs.createWriteStream('./data_COPY.txt'); 

readable.pipe(writeable);