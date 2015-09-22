var facebookSecret = require('../secret/facebook.secret').facebook;

module.exports = {
  // Development configuration options
  sessionSecret: 'developmentSessionSecret',
  db: 'mongodb://localhost/mean',
  facebook: {
    clientID: facebookSecret.clientID,
    clientSecret: facebookSecret.clientSecret,
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  }
};
