const http = require('http');
const data1= require('')
http.createServer((req,res)=>{
    res.write("here I am !")
    res.end();
}).listen(4900)