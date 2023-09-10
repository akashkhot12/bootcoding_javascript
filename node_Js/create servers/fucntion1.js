let http = require('http');

function useLocal(req,res) {
    res.write('<h1>its succefull</h1>')
    res.end()
}
http.createServer(useLocal).listen(456)