const http = require('http');
const fs = require('fs');
const path=require('path');
var op='hi';
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(op);
//     res.end();

// }).listen(8080);
fs.writeFile('demo.html',`${op}`,function(err)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("creating a file completed");
    }
})
fs.appendFile('demo.html','hello world',function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("appending to file completed");
    }
})
fs.mkdir('newdir',function(err){
    if(err){
        console.log(err);
    }
    console.log("directory created");
})
fs.rmdir('newdir',function(err){
    if(err){
        console.log(err);
    }
    console.log("directory removed");
})

var zlib = require('zlib');
zlib.createGunzip('demo.txt');
// Compress the file input.txt to input.txt.gz
fs.createReadStream('one.html')// read file
 .pipe(zlib.createGzip())// zip it
 .pipe(fs.createWriteStream('one.html.gz'));//write to another file as zip

console.log("File Compressed.");

fs.createReadStream('one.html.gz')// read file
 .pipe(zlib.createGunzip())// zip it
 .pipe(fs.createWriteStream('one.html'));//write to another file as zip

console.log("File DeCompressed.");
fs.copyFile(`${source}`,`${dest}`,function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(`File copied sucessfully`);
    }
})