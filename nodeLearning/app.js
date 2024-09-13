const http = require('http');
const routes = require('./routes');

// 1,conventional way to write a function
// function requestListener(req, res){}

// http.createServer(requestListener);

// 2.event driven method way to write a function
// http.createServer(function(req, res) {})

// 3.latest way to write function:
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);

