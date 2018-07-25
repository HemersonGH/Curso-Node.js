var express = require('express');
var app = express();

app.get('/produtos', function(request, responce) {
  responce.send("<html> <body> <h1> Listagem de Produtos </h1> </body> </html>");
});

app.listen(3000, function() {
  console.log("Server running");
});
