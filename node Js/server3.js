var http = require('http')

http.createServer(function(res,res){
    res.write('heelo');
    res.end()
}).listen(9000);