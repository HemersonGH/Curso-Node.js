var app = require('./config/express')();
// var routeProdutos = require('./app/routes/produtos')(app); // load already did it
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.set('io', io);

http.listen(port, function() {
  console.log("Server running at HEROKU");
});
