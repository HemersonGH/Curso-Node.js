var app = require('./config/express')();
// var routeProdutos = require('./app/routes/produtos')(app); // load already did it
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen(3000, function() {
  console.log("Server running");
});
