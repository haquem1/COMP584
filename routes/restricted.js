const yelp = require('../config/yelp'); //contains our token config

// choose response from protected route
getResponse = function (req, res, option) {
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

module.exports = getResponse;
