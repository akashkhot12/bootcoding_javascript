let lol = require('http');
lol.createServer((req,res)=>{
    res.write('<h1>hello morning</h1>')
    res.end()
}).listen(1234)