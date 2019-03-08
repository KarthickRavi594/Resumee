const http = require('http');
const fs = require('fs');
const express = require('express');
const app = new express();

const hostname = '127.0.0.1';
const port = '3500';

fs.readFile('../index.html',function(err,html){
    if(err){
        throw err;
    }
    http.createServer(function(request,response){
        response.writeHeader(200,{"Content-Type":"text/plain"});
        response.write(html);
        response.end();
    }).listen(port);
});
