import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import User from './User';
import LinkPage from './LinkPage';
// import {addUser, exitUser} from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');

Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});

class Main extends React.Component {
constructor () {
  super();

  this.state = {validUser: null};
  this.userVal = this.userVal.bind(this);
}

userVal(){
  let validate;
    Auth.validateToken()
      .then(function(user) {
        // console.log("true");
        validate = true;
        // this.setState({validUser: true});
      }.bind(this))
      .fail(function() {
        // console.log("kkk","false");
        validate = false;
        // this.setState({validUser: false});
      })
      return validate;
}

  render() {
    // console.log('fff',this.userVal());
    return (
      <div id="mainpage">
        {/* {this.props.user.uservalid == false ? <User /> : <LinkPage />} */}
        {this.userVal == true ? <LinkPage /> : <User />}
        {/* {console.log(this.userValidation())} */}
        {/* {console.log(this.props.user.uservalid)} */}
        {/* {console.log(this.state.validUser)} */}
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
