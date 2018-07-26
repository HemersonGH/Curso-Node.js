var app = require('./config/express')();
var routeProdutos = require('./app/routes/produtos')(app);

app.listen(3000, function() {
  console.log("Server running");
});
