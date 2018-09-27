import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUserLogin, fetchUserRegistration} from '../functions/auth';
import '../App.css';
import {getUser,setUserStatus} from '../reducers/getUser';
import '../../node_modules/toastr/build/toastr.css';
var toastr = require('../../node_modules/toastr/toastr');
// const queryString = require('query-string');

class User extends React.Component {

  constructor (props) {
    super(props)

    this.state = { 
      user_first_name : '', user_last_name : '', user_email : '', user_password : '',
      userobj:{},
      email_login: '', password_login: ''
    } 
  }

  userReg = () => {
    if ((this.state.first_name !== "") && (this.state.last_name !== "") && (this.state.email !== "") && (this.state.password !== "")){
      fetchUserRegistration(
        this.state.first_name, this.state.last_name, this.state.email, this.state.password
      ).then(response => {
        toastr.success(`Registration successfully ${response.data.full_name}`);  
      }).then().
        catch (error => {
        toastr.warning(`Registration Fail!!!`);  
      })
      
      
    }
  }

  onChangeReg = (event) => {
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

  onChangelogin = (event) => {
    switch (event.target.id) {
      case "email_login":
       this.setState({email: event.target.value});
       break;
      case "password_login":
       this.setState({password: event.target.value});
       break;
      }
  }

  userLogin = () => {
    fetchUserLogin(this.state.email, this.state.password).then(response => {
        // toastr.success("Добро пожаловать ", response.data.full_name);
        this.props.setUserStatus(response);
        if ( response === true ) {
          this.props.history.push('/');
        } else this.props.history.push('/user');
      });
  }

  render() {
    return (
      <div id="userform">
        {/* {this.props.user.userinfo.full_name}
        {this.props.user.uservalid} */}
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
          <br></br><button type="submit" onClick={this.userReg}>Sign up</button>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUser,
      setUserStatus
    },
    dispatch
  );
 };

function mapStateToProps (state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
