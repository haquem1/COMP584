//passport is an authentication middleware for node js.
//passport can be used to authenticate based on username and password

//jwt = json web tokens
//

var passport	  = require('passport');
var jwt         = require('jwt-simple');
var mongoose    = require('mongoose');
var authHandler = require('./auth');
var config      = require('../config/database'); // get db config file

// apply our config to passport
require('../config/passport')(passport);


const routes = require('express').Router();

// connect to database
mongoose.connect(config.database);

// route to sign up a user
routes.post('/register', function(req, res) {
  authHandler.signup(req, res);
});

// route to authenticate user
routes.post('/authenticate', function(req, res) {
  authHandler.auth(req, res);
});

// routes to restricted areas
routes.get('/memberinfo', function(req, res) {
  authHandler.protect(req, res, 0);
}, passport.authenticate('jwt', { session: false}));

routes.get('/search/:location/:term', function(req, res) {
  authHandler.protect(req, res, 1);
}, passport.authenticate('jwt', { session: false}));

routes.get('/business/:id', function(req, res) {
  authHandler.protect(req, res, 2);
}, passport.authenticate('jwt', { session: false}));

module.exports = routes;
