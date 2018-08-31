
import React from 'react';
import {connect} from 'react-redux';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import User from './User';
import LinkPage from './LinkPage';
import {getToken} from '../functions/config'
import {addUser, userValid} from '../reducers/getUser';


var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');

Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});

// console.log(" Token ", getToken());
// const AppStackNavigator = createStackNavigatior({
//   login: {
//     screen: User
//   }
// })



class Main extends React.Component {

  constructor (props) {
    super(props);

    // this.state = {token: null}
    // this.setUserStates = this.setUserStates.bind(this);
    this.userValid = this.userValid.bind(this);
  }

  userValid = (value) => this.props.dispatch(userValid(value));
  // addUser = (value) => this.props.dispatch(addUser(value));

  // setUserStates () {
  //   console.log(Auth.user)
  //   this.addUser(Auth.user);
  //   this.userValid(true);
  // }

  // checkUserValid () {
  //   Auth.validateToken()
  //   .then(function(user) {
  //     this.setUserStates();
  //   });
  // }

  isLogedIn(){
    if (getToken()) {
      this.userValid(getToken());
    }  
  }

  render() {
    return (
      <div>
        {/* {getToken() !== false ? <LinkPage /> : <User />} */}
        <LinkPage />
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(Main);
