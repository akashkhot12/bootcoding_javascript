let http = require('http');
http.createServer((req,res)=>{
    res.write('<h1>hello akash </h1>')
    res.end()
}).listen(600)