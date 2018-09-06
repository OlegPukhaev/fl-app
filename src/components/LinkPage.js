import React from 'react';
import {connect} from 'react-redux';
// import { render , component} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Main from './Main';
import User from './User';
import Tellent from './Tellent';
import {getToken} from '../functions/config';



import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
// import { userValid } from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// const axios = require('../../node_modules/axios/index');

class Menu extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route path="/" component={Menu} /> */}
              <h1>Menu</h1>
              <ul>
                <li><Link to="/Main">Main</Link></li>
                <li><Link to="/tellent">Tellent</Link></li>
              </ul>
            <Route exact path="/home" component={Home} />
            <Route path="/Main" component={Main} />
            <Route path="/tellent" component={Tellent} />
          {/* <Route />   */}
        </div>
      </BrowserRouter>
    );
  }
}

class LinkPage extends React.Component {
constructor (props) {
    super(props);

    // Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});
    this.onClickSignOut = this.onClickSignOut.bind(this);
    // this.exitUser = this.exitUser.bind(this);
}

// exitUser = () => this.props.dispatch(exitUser());
// userValid = (value) => this.props.dispatch(userValid(value));

onClickSignOut () {
  localStorage.clear()
  Auth.signOut();
  this.userValid(null);
}

  render() {
    return (
      <div>
        {getToken() !== false ? <Menu /> : <User />}
      </div>
    );
    
    // return (
    //   <div id="userform">
    //     Hello: {Auth.user.full_name}<br></br>
    //     {/* {console.log("lll", this.props.user.userinfo)} */}
    //     <button type="button" onClick={this.onClickSignOut}>Sign Out</button>
    //   </div>
    // );
  }
}

// function mapStateToProps (state){
//   return {
//       user: state.user
//   }
// }

export default LinkPage;