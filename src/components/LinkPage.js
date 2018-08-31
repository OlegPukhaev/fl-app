import React from 'react';
import { render , component} from 'react-dom';
// import {Router, Route} from 'react-router';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import { userValid } from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// const axios = require('../../node_modules/axios/index');



class Skills extends React.Component {
  render() { 
    return (
      <div>
        <h3>Skills</h3>
        <p>Здесь будет реализация навыков всяких и т.д. и т.п.</p>
        <p>Здесь будет реализация навыков всяких и т.д. и т.п.</p>
        <p>Здесь будет реализация навыков всяких и т.д. и т.п.</p>
        <p>Здесь будет реализация навыков всяких и т.д. и т.п.</p>

      </div>    
    );
  }
}

class Tellent extends React.Component {
  render() {
    return (
      <div>
        <h3>Tellent</h3>
        <p>Поиск работы </p>
        <p>Поиск работы </p>
        <p>Поиск работы </p>
        <p>Поиск работы </p>
        <p>Поиск работы </p>

      </div>
    );
  }
}

// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.component}</h3>
//   </div>
// );

class Menu extends React.Component {
  render (){
    return (
      <div>
        <h1>Menu</h1>
        {/* change the <a>s to <Link>s */}
          <ul>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/tellent">Tellent</Link></li>
            <li><Link to="/tellent">Tellent</Link></li>
          </ul>
          <Route component={Tellent} />
          <Route component={Skills} />
          <Route component={Menu} />
          {/* <Route path="/:id" component={Child} /> */}
      </div>
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
      <BrowserRouter>
        {/* <Route  component={Menu}/> */}
        <div>

          <ul>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/tellent">Tellent</Link></li>
          </ul>
          <Route path="/skills" component={Skills} />
          <Route path="/tellent" component={Tellent} />
        </div>
      </BrowserRouter>
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
