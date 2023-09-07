let http = require('http');

function createServers(req,res){
    res.write("<h1>Response activeted</h1>")
    res.end();
}

http.createServer(createServers).listen(1232)