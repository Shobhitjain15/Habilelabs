var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('test.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");


// let fs = require("fs");
// let data = '';

// // Create a readable stream
// let readerStream = fs.createReadStream('test.txt');

// // Set the encoding to be utf8. 
// // readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");

