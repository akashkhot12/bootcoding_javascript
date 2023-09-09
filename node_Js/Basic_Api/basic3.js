const http= require ('http');
const doc = require('./d{ata');
function getDoc(req,res) {
    res.writeHead(200,{'content-type':'application/json'});
    res.write(JSON.stringify(doc))
    res.end();
}

http.createServer(getDoc).listen(1200)