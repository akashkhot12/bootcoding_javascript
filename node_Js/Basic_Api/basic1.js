const http = require('http');
function sendData(req,resp){
    resp.writeHead(200,{'contend-type':'application\json'})
    resp.write("akash khot");
    resp.end();
}

http.createServer(sendData).listen(5000)