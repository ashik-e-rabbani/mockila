const http = require('http') // module provide by js



http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':''})
    response.write("Welcome");
    response.end();

}).listen(8080)