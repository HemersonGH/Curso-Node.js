module.exports = function(app) {
  app.get('/produtos', function(request, responce) {
    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'casadocodigo_nodejs',
      insecureAuth : true
    });

    connection.query('select * from livros', function(error, results) {
      responce.render('produtos/lista');
    });

    connection.end();
  });
}
