var app         = require('express')();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');

// get request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// bundle and connect the api routes under /
app.use('/', require('./routes'));

module.exports = app;
