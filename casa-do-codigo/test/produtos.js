var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {

  beforeEach(function(done) {
    var conn = express.infra.connectionFactory();
    conn.query("delete from livros", function(exception, result) {
      if (!exception) {
        done();
      }
    });
  });

  it('#Listagem json', function(done) {
    request.get('/produtos')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('#Inserindo produto com dados inválidos', function(done) {
    request.post('/produtos')
    .send({titulo:"", descricao:"Novo livro"})
    .expect(400, done);
  });

  it('#Inserindo produto com dados validos', function(done) {
    request.post('/produtos')
    .send({titulo:"Teste", descricao:"Inserção de novo livro com dados correto", preco:21.99})
    .expect(302, done);
  });

});
