var mysql = require('mysql');

function createDBConnection(){
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
}

// wrapper
module.exports = function() {
  return createDBConnection;
}
