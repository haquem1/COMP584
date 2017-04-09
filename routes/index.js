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
routes.post('/signup', function(req, res) {
  authHandler.signup(req, res);
});

// route to authenticate user
routes.post('/authenticate', function(req, res) {
  authHandler.auth(req, res);
});

// routes to restricted areas
routes.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
  authHandler.protect(req, res, 0);
});

routes.get('/search/:location', passport.authenticate('jwt', { session: false}), function(req, res) {
  authHandler.protect(req, res, 1);
});

routes.get('/business/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  authHandler.protect(req, res, 2);
});

module.exports = routes;
