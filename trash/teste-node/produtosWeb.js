// var http = require('http');
//
// var server = http.createServer( function(req, res) {
//   res.end("<html> <body> <h1> Listagem de Produtos </h1> <body> <html>");
// });
//
// server.listen(3000);
//
// console.log("Server is run");

var http = require('http');
var porta = 3000;
var ip = "localhost";

var server = http.createServer(function(request, response) {
  console.log("Recebendo request");
  response.writeHead(    200, {'Content-Type': 'text/html'});

  if (request.url == "/produtos") {
    response.end("<html> <body> <h1> Listagem de Produtos </h1> </body> </html>");
  } else {
    response.end("<html> <body> <h1> Home Casa do Codigo </h1> </body> </html>");
  }
});

server.listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");
