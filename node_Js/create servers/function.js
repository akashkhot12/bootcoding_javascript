let http = require('http');

function createServers(req,res){
    res.write("<h1>Response activeted</h1>")
    res.end();
}

http.createServer(createServers).listen(1232)



let http = require ('http');
function createServer(req,res){
    res.write("<h1>this is big head</h1>")
    res.ead()
}

http.createServer(createServer).listen(9000)