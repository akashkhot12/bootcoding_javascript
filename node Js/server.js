let http = require('http');

http.createServer((req,res)=>{
    // console.log('welcome akash');
    res.write('<h1>hello</h1>');
    res.end();
}).listen(5051);



