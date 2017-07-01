# SWISH
Restaurant Comparison Using Yelp API
----

## NG2 Integration Guide
https://angular.io/guide/webpack

This branch integrates NG2 into the project.
Here is how you get it to run.

bring up a terminal and cd into the project.
1. Start the server
```
npm run dev
```

Bring up another terminal and cd into the project
2. Start webpack so that it compiles NG2 to public and watch any changes
```
npm run buildng2
```
Now, the project should be up and running in localhost:8080.

# TODO: 
1. Clean up that package.json file.
 * There are some packages that are for testing purposes (not needed)
2. Improve Webpack configuration
3. Add SASS Support
4. Improve SRC folder structure
5. Port client code 
