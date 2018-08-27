import React from 'react';
import ReactDOM from 'react-dom';
// import {connect} from 'react-redux';

var Auth = require('../../node_modules/j-toker/src/j-toker.js');
var PubSub = require('../../node_modules/pubsub-js/src/pubsub.js');

Auth.configure({
  apiUrl:                'https://floating-atoll-63112.herokuapp.com/api',
  signOutPath:           '/auth/sign_out',
  emailSignInPath:       '/auth/sign_in',
  emailRegistrationPath: '/auth',
  accountUpdatePath:     '/auth',
  accountDeletePath:     '/auth',
  passwordResetPath:     '/auth/password',
  passwordUpdatePath:    '/auth/password',
  tokenValidationPath:   '/auth/validate_token',
  proxyIf:               function() { return false; },
  proxyUrl:              '/proxy',
  validateOnPageLoad:    false,
  forceHardRedirect:     false,
  storage:               'cookies',
  cookieExpiry:          14,
  cookiePath:            '/',

  passwordResetSuccessUrl: function() {
    return window.location.href;
  },

  confirmationSuccessUrl:  function() {
    return window.location.href;
  },

  tokenFormat: {
    "access-token": "{{ access-token }}",
    "token-type":   "Bearer",
    client:         "{{ client }}",
    expiry:         "{{ expiry }}",
    uid:            "{{ uid }}"
  },

  parseExpiry: function(headers){
    // convert from ruby time (seconds) to js time (millis)
    return (parseInt(headers['expiry'], 10) * 1000) || null;
  },

  handleLoginResponse: function(resp) {
    return resp.data;
  },

  handleAccountUpdateResponse: function(resp) {
    return resp.data;
  },

  handleTokenValidationResponse: function(resp) {
    return resp.data;
  },

  authProviderPaths: {
    github:    '/auth/github',
    facebook:  '/auth/facebook',
    google:    '/auth/google_oauth2'
  }
});

class Userregistration extends React.Component {
    
  constructor () {
    super();
  }

  userRegistr () {

    Auth.emailSignUp({
      email: 'nuba8184@gmail.com',
      password: '123456789',
      password_confirmation: '123456789'
    });

  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <button onClick={this.userRegistr}>Sign up</button>
      </div>
    );
  }
}

export default Userregistration;
