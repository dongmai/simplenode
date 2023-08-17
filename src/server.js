const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    let funcName = "requestHandler";
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end('Hello Web server!');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    let funcName = "server.listen";
    if (err) {
        return console.log(funcName, 'something bad happened: ' + err);
    }
});