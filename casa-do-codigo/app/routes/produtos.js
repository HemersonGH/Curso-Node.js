// var dbConnection = require('../infra/connectionFactory'); // load already did it

module.exports = function(app) {
  var listaProdutos = function(request, responce) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(error, results) {
      responce.format({
        html: function() {
          responce.render('produtos/lista', {lista:results});
        },
        json: function() {
          responce.json(results);
        }
      });
    });

    connection.end();
  };

  app.get('/produtos', listaProdutos);

  app.get('/produtos/form', function(request, responce) {
    responce.render('produtos/form');
  });

  app.post('/produtos', function(request, responce) {
    var produto = request.body;

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.salva(produto, function(error, results) {
      responce.redirect('/produtos');
    });

    connection.end();
  })
}
