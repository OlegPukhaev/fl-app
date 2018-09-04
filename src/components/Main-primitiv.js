
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Home from './Home';
import Skills from './Skills';
import Tellent from './Tellent';

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

var configapi = getToken();
// console.log("Token!!!!", configapi);
// const AppStackNavigator = createStackNavigatior({
//   login: {
//     screen: User
//   }
// })



class Main extends React.Component {

  constructor (props) {
    super(props);
  }


  render() {
    return (
      <div>

				{getToken() !== false ? <LinkPage /> : <User />}
                		{/* <User /> */}
      </div>
				
      
    );
  }
}








function mapDispatchToProps(dispatch){
  return {
    // add: () => dispatch(addTodo())
    // userValid: (value) => dispatch(userValid(value))
  }
}

function mapStateToProps (state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
