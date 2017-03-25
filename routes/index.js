var passport	  = require('passport');
var jwt         = require('jwt-simple');
var config      = require('../config/database'); // get db config file
var User        = require('../models/user'); // get the mongoose model
var mongoose    = require('mongoose');

// apply our config to passport
require('../config/passport')(passport);

const yelp = require('../config/yelp'); //contains our token config
const routes = require('express').Router();

// connect to database
mongoose.connect(config.database);

// fetch web token
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

// routine for protected routes
getProtected = function (req, res, option) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          if (option == 0) {
            res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
          }
          else if (option == 1) {
            // price is an optional parameter that users can filter by
            if (req.query.price) {
              yelp.search({term: req.query.term, location: req.params.location, price: req.query.price})
              .then(function (data) {
                  res.json(data);
              })
              .catch(function (err) {
                  console.error(err);
              });
            } else {
              yelp.search({term: req.query.term, location: req.params.location})
              .then(function (data) {
                  res.send(data);
              })
              .catch(function (err) {
                  console.error(err);
              });
            }
          }
          else if (option == 2) {
            yelp.business(req.params.id)
            .then(function (data) { res.json(data); })
            .catch(function (err) { console.error(err);});
          }
          else if (option == 3) {
            yelp.reviews(req.params.id)
            .then(function (data) { res.json(data); })
            .catch(function (err) { console.error(err);});
          }
          else {
            res.json({success: false, msg: 'Option does not exist'});
          }
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};

routes.post('/signup', function(req, res) {
  if (!req.body.name || !req.body.password) {
    res.json({success: false, msg: 'Please pass name and password.'});
  } else {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

// route to authenticate a user (POST http://localhost:8080/authenticate)
routes.post('/authenticate', function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

// routes to restricted areas
routes.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
  getProtected(req, res, 0);
});

routes.get('/search/:location', passport.authenticate('jwt', { session: false}), function(req, res) {
  getProtected(req, res, 1);
});

routes.get('/business/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  getProtected(req, res, 2);
});

routes.get('/reviews/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  getProtected(req, res, 3)
});

module.exports = routes;
