module.exports = function(app) {
    app.get("/promocoes/form", function(request, responce) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros, responceultados) {
            responce.render('promocoes/form', {lista: responceultados});
        });
        connection.end();
    });

    app.post("/promocoes", function(request, responce) {
        var promocao = request.body;
        console.log();
        app.get('io').emit('novaPromocao', promocao);
        responce.redirect('promocoes/form');
    });
}
