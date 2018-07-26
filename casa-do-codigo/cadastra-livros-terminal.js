var http = require('http');

var configs = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var client = http.request(configs, function(responce) {
  console.log(responce.statusCode);
  responce.on('data', function(body) {
    console.log('Corpo: ' + body);
  });
});

var produto = {
  titulo: 'Mais sobre node.js',
  descricao: 'node, javascript e um pouco sobre http',
  preco: 100
};

client.end(JSON.stringify(produto));
