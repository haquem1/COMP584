# Application Structure
This web application uses the MEAN stack (MongoDB, Express, AngularJS, and NodeJS).

## Setup

#### Node
To get this running locally, start by installing [**NodeJS**](http://nodejs.org/download/). The Node website is very good at explaining how to do this. Once installed verify that npm (Node Package Manager) came with the installation by running npm in Terminal.

#### Mongo
The app's database is currently hosted on MongoLab. <br><br>However, you can download and install [**MongoDB**](http://www.mongodb.org/downloads) to have it running on your local machine. **Make sure to follow all the directions for installing on your respective operating system.** Verify that this is installed correctly by running the mongo server locally with the command ```mongod```. The mongod service must be running locally to point to local Mongo databases.


## Configure
Clone the repository, and you will have the structure in place to start. Edit the package.json file or use <br>```npm install <module> --save```

Install all listed dependencies by navigating to the repository in Terminal and running the command <br>```npm install```

This will install [**Express**](http://expressjs.com/4x/api.html) along with the other packages in the package.json file.

In the above, "latest" denotes version number. It's a string. I set it to latest to simplify use. I am also assuming that these package owners will continue to document their changes as they update their packages.

The project also makes use of environment variables. A template is included in the repository but, the actual values has been distributed to the team via our team Slack.

#### Connecting to a Database
Replace the link below with the url for your hosted DB or keep this url for the default local MongoDB
```javascript
// config/db.js
module.exports = {
	url : 'mongodb://localhost:8080/swish'
}
```


#### Run the server
To run this server on our local machine, in the root of the project directory run <br> ```npm start```

It will start the application and you should be able to navigate to http://localhost:8080/ for the base URL to our API if running on your local machine.

If using our deployed version, the base URL is https://swish-api.herokuapp.com, you will not to need to run anything on your terminal

i.e. http://localhost:8080/memberinfo or https://swish-api.herokuapp.com/memberinfo is the route to get the homepage for members

#### Our routes

###### Registration
POST<br><br>
pass in name and password through url encoded form body
returns status and message for user creation
```
/signup
```

###### Authenticate
POST<br><br>
pass in name and password through url encoded form body
returns status with either web token or message
```
/authenticate
```

###### Member Area
GET<br><br>
set Authorization in header to returned token value from authenticate api
returns status and message
```
/memberinfo
```

###### Restaurant Search
POST<br><br>

set Authorization in header to returned token value from authenticate api
pass in location which is zip code as param which is just appended with a slash in the url and query string parameters of term which is any keyword(s) passed and price which can be any combination of 1,2,3,4 in ascending order
returns JSON result from query
```
/search/:location
```

###### Restaurant Information
POST<br><br>

set Authorization in header to returned token value from authenticate api
pass in business id for any given business from Yelp as param which is just appended with a slash in the url
returns JSON result from query
```
/business/:id
```

###### Restaurant Review Information
POST<br><br>

set Authorization in header to returned token value from authenticate api
pass in business id for any given business from Yelp as param which is just appended with a slash in the url
returns JSON result from query
```
/reviews/:id
```
