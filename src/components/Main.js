
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

var configapi = getToken();
console.log("Token!!!!", configapi);
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
      <div class="wrapper">
        <nav class="main-top-nav flexbox justify-space-between">
            <div class="logo">
              <a class="logo-link" href="index.html"><img src="images/logo.png" height="39" width="auto" /></a>
            </div>
            <div type="button" class="humburger-icon">
            <button type="button" class="btn btn-bg-transparent"><span class="icon icon-menu"></span></button>
          </div>
            <section class="nav-mobile flexbox justify-space-between">
              <section class="nav-tablet flexbox justify-space-center">
                <div class="search-form">
                  <form class="my-search-form" role="search">
                    <input type="text" class="form-control" placeholder="Search" />
                    <div class="search-filter radio-block">
                    <div class="radio">
                      <input type="radio" name="profile-page-filter" id="jobs-filter" value="jobs-filter" checked />
                      <label for="jobs-filter">
                        <span class="radio-text">Jobs</span>
                      </label>
                    </div>
                    <div class="radio">
                      <input type="radio" name="profile-page-filter" id="talents-filter" value="talents-filter" />
                      <label for="talents-filter">
                        <span class="radio-text">Talents</span>
                      </label>
                    </div>
                  </div>
                  <a href="" type="submit" class="btn-search"><i class="icon icon-loupe"></i></a>
                </form>
                </div>
                <div class="nav-list">
                  <ul class="flexbox justify-space-between">
                              <li>
                                  <a href="#">Teachers <div class="caret"></div></a>
                              </li>
                              <li class="active">
                                  <a href="#">Profile <div class="caret"></div></a>
                              </li>
                              <li>
                                  <a href="#">Favorites <div class="caret"></div></a>
                              </li>
                  <li>
                                  <a href="#">About <div class="caret"></div></a>
                              </li>
                          </ul>
                </div>
              </section>
              <div class="user-box">
                <div class="user-photo">
                  <i class="notif"></i>
                </div>
                <div class="user-box-nav dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Philip Seamor<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><a href="#">One more separated link</a></li>
                  </ul>
              </div>
              </div>
            </section>
          </nav>
        
        {/* {getToken() !== false ? <LinkPage /> : <User />} */}
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
