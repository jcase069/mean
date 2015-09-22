var facebookSecret = require('../secret/facebook.secret').facebook,
  twitterSecret = require('../secret/twitter.secret').twitter,
  googleSecret = require('../secret/google.secret').google;

module.exports = {
  // Development configuration options
  sessionSecret: 'developmentSessionSecret',
  db: 'mongodb://localhost/mean',
  facebook: {
    clientID: facebookSecret.clientID,
    clientSecret: facebookSecret.clientSecret,
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: twitterSecret.consumerKey,
    clientSecret: twitterSecret.consumerSecret,
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: googleSecret.clientId,
    clientSecret: googleSecret.clientSecret,
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};
