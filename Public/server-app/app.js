var http = require("http");

var app = http.createServer(function(req, res){

    res.writeHead(200,
            {
                'content-type': 'text/html'
            }
        )
    res.write("<h2>Welcome to Node.js Aliens...</h2>");
    res.end();
})
app.listen(8080);
console.log('Server Started at : http://127.0.0.1:8080');