# MEAN Structure
This web application uses the MEAN stack (MongoDB, Express, AngularJS, and NodeJS).

## Setup

#### Node
To get this running locally, start by installing [**NodeJS**](http://nodejs.org/download/). The Node website is very good at explaining how to do this. Once installed verify that npm (Node Package Manager) came with the installation by running npm in Terminal.

#### Mongo
The app's database is currently hosted on MongoLab. <br><br>However, you can download and install [**MongoDB**](http://www.mongodb.org/downloads) to have it running on your local machine. **Make sure to follow all the directions for installing on your respective operating system.** Verify that this is installed correctly by running the mongo server locally with the command ```mongod```. The mongod service must be running locally to point to local Mongo databases.


## Configure
Clone the repository, and you will have the structure in place to start. Edit the package.json file or use ```npm install <module> --save```

Install all listed dependencies by navigating to the repository in Terminal and running the command 

```npm install

This will install [**Express**](http://expressjs.com/4x/api.html) along with the other packages in the package.json file. 

In the above, "latest" denotes version number. It's a string. I set it to latest to simplify use. I am also assuming that these package owners will continue to document their changes as they update their packages. 

The project also makes use of environment variables. A template is included in the repository but, the actual values has been distributed to the team via our team Slack. 

<Enter>
<Enter>
<Enter>

#### Connecting to a Database
Replace the link below with the url for your hosted DB or keep this url for the default local MongoDB
```javascript
// config/db.js
module.exports = {
	url : 'mongodb://localhost:8080/swish'
}
```

```

#### Run the server
To run this server, in the root of the project directory run 

```npm start``` 

It will start the application and you should be able to navigate to http://localhost:8080/ for the base URL to our API.

i.e. http://localhost:8080/memberinfo is the route to get the homepage for members

``` 
#### Our routes

###### Registration
```
POST

/signup

pass in name and password through url encoded form body
returns status and message for user creation
``` 

###### Authenticate
```
POST

/authenticate

pass in name and password through url encoded form body
returns status with either web token or message
``` 

###### Member Area
```
GET

/memberinfo

set Authorization in header to returned token value from authenticate api
returns status and message 
``` 

###### Restaurant Search
```
POST

/search/:location

set Authorization in header to returned token value from authenticate api
pass in location which is zip code as param which is just appended with a slash in the url and query string parameters of term which is any keyword(s) passed and price which can be any combination of 1,2,3,4 in ascending order
returns JSON result from query 
``` 

###### Restaurant Information
```
POST

/business/:id

set Authorization in header to returned token value from authenticate api
pass in business id for any given business from Yelp as param which is just appended with a slash in the url
returns JSON result from query
``` 

###### Restaurant Review Information
```
POST

/reviews/:id

set Authorization in header to returned token value from authenticate api
pass in business id for any given business from Yelp as param which is just appended with a slash in the url
returns JSON result from query
``` 

