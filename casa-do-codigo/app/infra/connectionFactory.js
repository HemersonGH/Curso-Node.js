var mysql = require('mysql');

function createDBConnection(){

  // o certo é sem passar um valor pra variavel
  // o if correto seria (!(process.env.NODE_ENV))
  // process.env.NODE_ENV='test';
  process.env.NODE_ENV='production';

  if (process.env.NODE_ENV == 'production') {
    return mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'casadocodigo_nodejs',
      insecureAuth : true
    });
  }

  if (process.env.NODE_ENV == 'test') {
    return mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'casadocodigo_nodejs_test',
      insecureAuth : true
    });
  }
}
// wrapper
module.exports = function() {
  return createDBConnection;
}
