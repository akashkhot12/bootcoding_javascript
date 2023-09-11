let http = require('http');

http.createServer((req,resp)=>{
    resp.write('this code will be run today');
    resp.end()
}).listen(4100) 