var express = require('express');
var bodyParser = require('body-parser');
var logger = require("morgan");
var path = require('path');
var app = express();
var index = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use('/',index);
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
var db = require('./db/index');
module.exports = app;