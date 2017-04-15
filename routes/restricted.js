const yelp = require('../config/yelp'); //contains our token config

// choose response from protected route
getResponse = function (req, res, option) {
  if (option == 0) {
    res.json({success: true, msg: 'Welcome in the member area!'});
  }
  else if (option == 1) {
    // categories is optional
    if (req.query.categories) {
      // price is optional
      if (req.query.price) {
        yelp.search({term: req.query.term, location: req.params.location, categories: req.query.categories, price: req.query.price})
        .then(function (data) {
            res.send(JSON.parse(data));
        })
        .catch(function (err) {
            console.error(err);
        });
      } else {
        yelp.search({term: req.query.term, location: req.params.location, categories: req.query.categories})
        .then(function (data) {
            res.send(JSON.parse(data));
        })
        .catch(function (err) {
            console.error(err);
        });
      }
    } else {
      if (req.query.price) {
        yelp.search({term: req.query.term, location: req.params.location, price: req.query.price})
        .then(function (data) {
            res.send(JSON.parse(data));
        })
        .catch(function (err) {
            console.error(err);
        });
      } else {
        yelp.search({term: req.query.term, location: req.params.location})
        .then(function (data) {
            res.send(JSON.parse(data));
        })
        .catch(function (err) {
            console.error(err);
        });
      }
    }

  }
  else if (option == 2) {
    yelp.business(req.params.id)
    .then(function (data) { res.send(JSON.parse(data)); })
    .catch(function (err) { console.error(err);});
  }
  else {
    res.json({success: false, msg: 'Option does not exist'});
  }
}

module.exports = getResponse;
