var http = require('http');

var configs = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  headers: {
    'Accept': 'application/json',
    // 'Accept': 'text/html'
  }
};

http.get(configs, function(responce) {
  console.log(responce.statusCode);
  responce.on('data', function(body) {
    console.log('Corpo: ' + body);
  });
});
