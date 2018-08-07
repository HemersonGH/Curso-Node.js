var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
  console.log("Module is loading");
  var app = express();

  app.use(express.static('./app/public/'));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator());

  load('routes', {cwd: 'app'})
  .then('infra')
  .into(app);

  app.use(function(request, responce, next) {
    responce.status(404).render('errors/404');
    next();
  });

  // app.use(function(error, request, responce, next) {
  //   if (process.env.NODE_ENV == 'production') {
  //     responce.status(500).render('errors/500');
  //
  //     return;
  //   }
  //
  //   next(error);
  // });

  return app;
}
