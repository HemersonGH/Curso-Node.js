var http = require('http');
var assert = require('assert');

describe('#ProdutosController', function() {
  it('#Listagem json', function(done) {

    var configs = {
      hostname: 'localhost',
      port: 3000,
      path: '/produtos',
      headers: {
        'Accept': 'application/json',
        // 'Accept': 'text/html'
      }
    };

    // console.log("Teste de verificação de listagem JSON");

    http.get(configs, function(responce) {
      assert.equal(responce.statusCode, 200);
      assert.equal(responce.headers['content-type'], 'application/json; charset=utf-8');
      done();
        // console.log("Status it's ok");
        // console.log("Content Type And Responce it's ok");
    });
  });
});
