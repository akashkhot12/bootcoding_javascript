let http = require('http');

http.createServer((req,res)=>{
     console.log('welcome akash');
    res.write('<h1>Good afternoon</h1>');
    res.end();
}).listen(5052);
