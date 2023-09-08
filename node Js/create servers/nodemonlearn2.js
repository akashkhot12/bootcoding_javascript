let http = require('http')

http.createServer((req,res)=>{
    res.write("hello folks! how are you?")
    res.end();
}).listen(2340)