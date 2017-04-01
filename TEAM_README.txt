3.22.17

-Added database.js and passport.js to config folder.  Still trying to figure out if it'll crash anything  -clyde

-Changed bcrypt version to 'latest' from 0.8.5 - clyde

-Finished integrating server.js -clyde 

-Error in Yelp npm module, replace code in node_modules/yelp-api-v3/index.js for business and reviews functions with following:   
  
  business(id, callback) {
    return this.get(`businesses/${id}`, undefined, callback);
  }

  reviews(id, callback) {
    return this.get(`businesses/${id}/reviews`, undefined, callback);
  }

-maroof

-When downloading a fresh copy of our project for local dev, run 'npm setup', then go into the file named .env and edit the values with values in the file shared on team Slack, then run 'npm install' -maroof

-To fire up project, ensure that MongoDB is running (run 'mongod' from another terminal if it is not), then run npm start to start the project -maroof
