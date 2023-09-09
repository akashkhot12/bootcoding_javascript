const http = require('http');
const data1= require('./data1')
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify(data1))
    res.end();
}).listen(4900)