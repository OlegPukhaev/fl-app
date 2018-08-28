import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
var PubSub = require('../../node_modules/pubsub-js/src/pubsub.js');

Auth.configure({
  apiUrl:                'https://floating-atoll-63112.herokuapp.com/api',
});

class User extends React.Component {

  constructor () {
    super()

    this.state = { 
      user_first_name : '',
      user_last_name : '',
      user_email : '',
      user_password : '',
    } 

    this.userLogin = this.userLogin.bind(this)
    this.userRegistr = this.userRegistr.bind(this)
    this.signOut = this.signOut.bind(this)
    this.onClickUpdateAcc = this.onClickUpdateAcc.bind(this)
    this.onChangeReg = this.onChangeReg.bind(this)
  }

  userRegistr () {
    if ((this.state.first_name != "") && (this.state.last_name != "") && (this.state.email != "") && (this.state.password != "")){
      Auth.emailSignUp({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      });
    } else {
      alert("Empty fields!!!");
    }
  }

  onChangeReg (event) {
    switch (event.target.id) {
      case "first_name":
       this.setState({first_name: event.target.value});
       break;
      case "last_name":
       this.setState({last_name: event.target.value});
       break;
      case "email":
       this.setState({email: event.target.value});
       break;
      case "password":
       this.setState({password: event.target.value});
       break;
      }
      // console.log(this.state.first_name, this.state.last_name, this.state.email, this.state.password );
      console.log(Auth.user);
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
      address: 'nuba818400@gmail.com',
      password: "123456789"
    });
    console.log(Auth.user);
  }
  

  render() {

    return (
      <div id="userform">

        <div id="user-reg">
          <h3>Registration</h3>
          First Name :
          <input type="text" id="first_name" placeholder="Firs Name" onChange={this.onChangeReg}/><br></br>
          Last Name :
          <input type="text"  id="last_name" placeholder="Last Name"  onChange={this.onChangeReg}/><br></br>
          E-mail :
          <input type="email" id="email" placeholder="Email"  onChange={this.onChangeReg}/><br></br>
          Password :
          <input type="password" id="password" placeholder="Password"  onChange={this.onChangeReg}/><br></br>
          <br></br><button type="submit" onClick={this.userRegistr}>Sign up</button>
        </div>




        <div id="user-log">
          <h3>Sign in</h3>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Password"></input>
          <button onClick={this.userLogin}>Sign in</button>
          <button onClick={this.signOut}>Sign out</button>

          <h2>Welcome {this.props.user.full_name}</h2>
          <h2>Welcome {this.props.user.first_name}</h2>
          <h2>Welcome {this.props.user.last_name}</h2>
          <h2>E-mail {this.props.user.email}</h2>
          {/* <h2>Address {this.state.address}</h2> */}
          {/* <button onClick={this.onClickUpdateAcc}>update accaunt</button> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(User);
