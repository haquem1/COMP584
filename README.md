# SWISH
Restaurant Comparison Using Yelp API
----

## NG2 Integration Guide
https://angular.io/guide/webpack

This branch integrates NG2 into the project.
Here is how you get it to run.

bring up a terminal and cd into the project.
1. Install dependencies
```
npm install
```

2. Start the server
```
npm run dev
```
Bring up a new terminal, 
3. Start webpack so that it compiles NG2 to public and watch any changes
```
npm run buildng2
```
Now, the project should be up and running in localhost:8080.

# TODO: 
0. Create parallel execution of 'dev' and 'buildng2' with one npm script
1. Clean up that package.json file.
 * There are some packages that are for testing purposes (not needed)
2. Improve Webpack configuration
3. Add SASS Support
4. Improve SRC folder structure
5. Port client code 
