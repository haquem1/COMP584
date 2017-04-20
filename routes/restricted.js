const yelp = require('../config/yelp'); //contains our token config

// choose response from protected route
getResponse = function (req, res, option) {
  if (option == 0) {
    res.json({success: true, msg: 'Welcome in the member area!'});
  }
  else if (option == 1) {
    yelp.search({term: req.params.term, location: req.params.location, categories: req.query.categories, price: req.query.price})
    .then(function (data) {
        res.send({msg: JSON.parse(data)});
      })
  }
  else if (option == 2) {
    yelp.business(req.params.id)
    .then(function (data) { res.send({msg: JSON.parse(data)}); })
    .catch(function (err) { console.error(err);});
  }
  else {
    res.json({success: false, msg: 'Option does not exist'});
  }
}

module.exports = getResponse;
