var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
  console.log("Module is loading");
  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  load('routes', {cwd: 'app'})
    .then('infra')
    .into(app);

  return app;
}
