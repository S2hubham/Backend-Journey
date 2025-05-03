const fs = require("fs");
const TransformStream = require('stream').Transform;
const readstream = fs.createReadStream(__dirname + '/run.txt');
const filewritestream = fs.createWriteStream(__dirname + '/write.txt');

const transFormedStream = new TransformStream({
    transform(chunk, enc, cb){
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000);
    }
});

// used just to print to terminal/console
const writestream = process.stdout;

// Just display original file to console
// readstream.pipe(writestream);

// Convert text to uppercase and display
// readstream.pipe(transFormedStream).pipe(writestream);

const outputStream = readstream.pipe(transFormedStream);
outputStream.pipe(writestream);
outputStream.pipe(filewritestream);

/* 
working of upper commands => 

run.txt  (original lowercase)
   ↓ readstream
TRANSFORM (uppercase)
   ↓ outputStream
=> printed on terminal (stdout)
=> saved to write.txt (file)


*/