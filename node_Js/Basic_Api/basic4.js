const rumor = require('http');
rumor.createServer((req,res)=>{
    res.write("hello");
    res.end()
}).listen(4908)