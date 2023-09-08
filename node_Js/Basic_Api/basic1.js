const http = require('http');
function sendData(req,resp){
    resp.writeHead(2000,{'contend-type':'application\json'})
    resp.write("akash khot");
    resp.end();
}

http.createServer(sendData).listen(5600)