var mysql = require('mysql');

function createDBConnection(){
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'casadocodigo_nodejs',
    insecureAuth : true
  });
}

// wrapper
module.exports = function() {
  return createDBConnection;
}
