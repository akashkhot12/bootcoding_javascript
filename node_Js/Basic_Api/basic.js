const http = require('http')
const data = require('./data')
http.createServer((req,resp)=>{
    resp.writeHead(201,{'Content-type' : 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000)