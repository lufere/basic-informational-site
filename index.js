var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname + ".html";
    if(q.pathname == '/') filename = './index.html';
    fs.readFile(filename, function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return fs.readFile('./404.html',function(err,data){
                // res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                return res.end();
            });
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);