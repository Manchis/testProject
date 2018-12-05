const http = require('http');
const os = require('os');

console.log(`{timestamp: ${Date.now()},
    server: ${os.hostname()},
    msg: "inicio de app en puerto 8080"
}`); 

var handler = function(request, response) {
    console.log(`{timestamp: ${Date.now()},
        server: ${os.hostname()},
        path: ${request.url},
        from: ${request.connection.remoteAddress},
        msg: "request"
    }`);
    console.log(request.url)
    response.writeHead(200);
    response.end(`Respuesta a invocacion desde ${os.hostname()}\r\n\r\n${new Date()}`);
};

var www = http.createServer(handler);
www.listen(8080);