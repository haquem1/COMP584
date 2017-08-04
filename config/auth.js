// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FB_ID,
        'clientSecret'  : process.env.FB_SECRET,
        'callbackURL'   : process.env.FB_CALL
    },

    'googleAuth' : {
        'clientID'      : process.env.GOOGLE_ID,
        'clientSecret'  : process.env.GOOGLE_SECRET, 
        'callbackURL'   : process.env.GOOGLE_CALL
  },
    }

};
