var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname +'/index.html'));
});

app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname +'/about.html'));
});

app.get('/contact-me', function(req,res){
    res.sendFile(path.join(__dirname +'/contact-me.html'));
});

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname +'/404.html'));
});

app.listen(8080, function(){
    console.log("App listening on port 8080")
});