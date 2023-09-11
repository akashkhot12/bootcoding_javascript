let http = require('http');
const data = require('./data')

function giveServer(req,res){
    res.writeHead(200,{'content-type':'application/json'})
    res.write(JSON.stringify(data))
    res.end()
}
http.createServer(giveServer).listen(4100) 