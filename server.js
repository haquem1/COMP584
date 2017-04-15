var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var app         = express();

var forceSsl = function (req, res, next) {
   if (req.headers['x-forwarded-proto'] !== 'https') {
       return res.redirect(['https://', req.get('Host'), req.url].join(''));
   }
   return next();
};

app.use(forceSsl);
// get request parameters
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// bundle and connect the api routes under /
app.use('/', require('./routes'));

module.exports = app;
