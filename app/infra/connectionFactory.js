var mysql = require('mysql');

function createDBConnection(){

  // o certo é sem passar um valor pra variavel
  // o if correto seria (!(process.env.NODE_ENV))
  // process.env.NODE_ENV='test';
  // process.env.NODE_ENV='production';

  if (!(process.env.NODE_ENV)) {
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

  if (process.env.NODE_ENV == 'production') {
    var urlConnection = process.env.CLEARDB_DATABASE_URL;
    var group = urlConnection.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);

    console.log("AT = " + urlConnection);

    return mysql.createConnection({
      // host : group[3],
      // user : group[1],
      // password : group[2],
      // database : group[4],
      host : 'us-cdbr-iron-east-01.cleardb.net',
      user : 'be78f1d7aa82eb',
      password : '9e9ec4fe',
      database : 'heroku_0fcee529c1999fc',
    });
  }

}
// wrapper
module.exports = function() {
  // console.log("VAR_ENV = " + process.env.NODE_ENV);
  return createDBConnection;
}
