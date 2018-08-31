
import React from 'react';
// import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import User from './User';
import LinkPage from './LinkPage';
// import userValid from './../reducers/getUser';
import {addUser, userValid} from '../reducers/getUser';

var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');

Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});



// const AppStackNavigator = createStackNavigatior({
//   login: {
//     screen: User
//   }
// })



class Main extends React.Component {

  constructor (props) {
    super(props);

    this.setUserStates = this.setUserStates.bind(this);
    this.userValid = this.userValid.bind(this);
  }

  userValid = (value) => this.props.dispatch(userValid(value));
  addUser = (value) => this.props.dispatch(addUser(value));

  setUserStates () {
    console.log(Auth.user)
    this.addUser(Auth.user);
    this.userValid(true);
  }

  checkUserValid () {
    // PubSub.subscribe('auth.validation.success', function() {
    //   this.setUserStates();
    // }.bind(this));
    Auth.validateToken()
    .then(function(user) {
      this.setUserStates();
    });



  }

  render() {
    console.log('777', this.props.user);
    // this.checkUserValid();
    return (
      <div>
        {/* {this.props.user.uservalid == true ? <LinkPage /> : <User /> } */}
        <User />
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
