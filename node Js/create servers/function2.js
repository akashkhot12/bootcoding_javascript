let http = require('http')

function useServer(req,res){
    res.write('<h1>show the content</h1>')
    res.end()
}

http.createServer(useServer).listen(190)