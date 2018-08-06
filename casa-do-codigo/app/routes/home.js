module.exports = function(app) {
    app.get('/', function(request, responce) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erros, resultados) {
            responce.render('home/index', {livros:resultados});
        });

        connection.end();
    });
}
