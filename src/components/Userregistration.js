import React from 'react';
// import {connect} from 'react-redux';
// var obj;
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// var PubSub = require('../../node_modules/pubsub-js/src/pubsub.js');

Auth.configure({
  apiUrl:                'https://floating-atoll-63112.herokuapp.com/api',
});

class Userregistration extends React.Component {

  

  constructor () {
    super()

    this.state = { 
      user_full_name : "User",
      user_email : null,
      address: null
    } 

    this.userLogin = this.userLogin.bind(this)
    this.userRegistr = this.userRegistr.bind(this)
    this.signOut = this.signOut.bind(this)
    this.onClickUpdateAcc = this.onClickUpdateAcc.bind(this)
  }

  userRegistr () {
    Auth.emailSignUp({
      first_name: 'Oleg',
      last_name: 'Pukhaev',
      email: 'nuba8184@gmail.com',
      password: '123456789'
    });
  }

  userLogin () {
    Auth.emailSignIn({
      email: 'nuba818400@gmail.com',
      password: "123456789"
    });

    var obj = Object.assign({}, Auth );
    this.setState({
      user_full_name: obj.user.full_name,
      user_email: obj.user.email,
      user_address: obj.user.address            
    });

    console.log(Auth.user);
  }

  signOut () {
    Auth.signOut();
  }

  onClickUpdateAcc () {
    Auth.updateAccount({
      address: 'nuba8184@gmail.com',
      password: "123456789"
    });
    console.log(Auth.user);
  }
  

  render() {

    return (
      <div>
        <div>
          <h3>Registration</h3>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Password"></input>
          <button onClick={this.userRegistr}>Sign up</button>
        </div>
        <div>
          <h3>Sign in</h3>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Password"></input>
          <button onClick={this.userLogin}>Sign in</button>
          <button onClick={this.signOut}>Sign out</button>

          <h2>Welcome {this.state.user_full_name}</h2>
          <h2>E-mail {this.state.user_email}</h2>
          <h2>Address {this.state.address}</h2>
          <br></br>
          <button onClick={this.onClickUpdateAcc}>update accaunt</button>





        </div>
      </div>
    );
  }
}

export default Userregistration;
