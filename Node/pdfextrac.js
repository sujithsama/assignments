var PdfExtractor=require('pdf-extractor').PdfExtractor;
 var http=require('http');
var newpath;
PdfExtractor=new PdfExtractor("scholarship.pdf",function(err,data){
    var op=data;
})
http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(op +"hi");
        res.end(); 
    }).listen(8080);