let http = require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content type' : 'application\json'});
    resp.write(JSON.stringify({name:'akash khot', email:'akashkhot02@gmail.com'}))
}).listen(4560)