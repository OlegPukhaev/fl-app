import React from 'react';
import {connect} from 'react-redux';
import {getToken} from './../functions/config';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import {addUser, userValid} from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');

    Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api',
    storage : 'localStorage'
  });

  var configapi = getToken();

   const axios = require('../../node_modules/axios');
    axios.defaults.headers.common['access-token'] = configapi['access-token'];
    axios.defaults.headers.common['expiry'] = configapi['expiry'];
    axios.defaults.headers.common['token-type'] = configapi['token-type'];
    axios.defaults.headers.common['uid'] = configapi['uid'];
    axios.defaults.headers.common['client'] = configapi['client'];
    
    axios.defaults.baseURL = 'https://floating-atoll-63112.herokuapp.com';
    axios.get('/api/v1/profile/personal'
  )
      .then(function (response) {
        // handle success
        console.log(' my data ', response);
      })
      .catch(function (error) {
        // handle error
        console.log('my errors' , error);
      })
      .then(function () {
        // always executed
      });


class User extends React.Component {

  constructor (props) {
    super(props)


    this.state = { 
      user_first_name : '', user_last_name : '', user_email : '', user_password : '',
      userobj:{},
      email_login: '', password_login: ''
    } 

    this.userLogin = this.userLogin.bind(this)
    this.userRegistr = this.userRegistr.bind(this)
    this.onChangeReg = this.onChangeReg.bind(this)
    this.addUser = this.addUser.bind(this)
    this.onChangelogin = this.onChangelogin.bind(this)
  }
  // exitUser = () => this.props.dispatch(exitUser());

  userRegistr () {
    if ((this.state.first_name !== "") && (this.state.last_name !== "") && (this.state.email !== "") && (this.state.password !== "")){
      Auth.emailSignUp({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      });
      Auth.validateToken()
      .then(function(user) {
        this.setState({
          username: user.username
        })
      }.bind(this));
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
  }

  onChangelogin (event) {
    switch (event.target.id) {
      case "email_login":
       this.setState({email: event.target.value});
       break;
      case "password_login":
       this.setState({password: event.target.value});
       break;
      }
  }

  userValid = (value) => this.props.dispatch(userValid(value));
  addUser = (value) => this.props.dispatch(addUser(value));

  setUserStates () {
    this.addUser(Auth.user);
    this.userValid(true);
  }

  userLogin () {
      Auth.emailSignIn({
        email: this.state.email,
        password: this.state.password
      }).then(//редирект на мэин пэйдж
      );
  }

  render() {
    return (
      <div id="userform">
        {this.props.user.userinfo.full_name}
        {this.props.user.uservalid}
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
          <input type="email" id="email_login" placeholder="Email" onChange={this.onChangelogin}/><br></br>
          <input type="password" id="password_login" placeholder="Password" onChange={this.onChangelogin}/><br></br>
          <button onClick={this.userLogin}>Sign in</button><br></br><br></br>
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
