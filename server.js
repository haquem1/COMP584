var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var app         = express();

// get request parameters
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// bundle and connect the api routes under /
app.use('/', require('./routes'));

module.exports = app;
