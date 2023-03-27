var fs=require('fs');

fs.readFile('pdfextrac.js','utf-8',function(err,data){
    var text=data;
    console.log("read complete");
    console.log(text.toString());
})
fs.writeFile('writefile.js','hello',function(err,data)
{
console.log('write complete');
})