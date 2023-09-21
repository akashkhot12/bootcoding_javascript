let http = require('http');

http.createServer((req,res)=>{
    // console.log('welcome akash');
    res.write('<h1>hello world</h1>');
    res.end();
}).listen(5051);



const http = require('http');
http.createServer((req,res)=>{
    res.write("this nis neew server genreted")
    res.end()
}).listen();