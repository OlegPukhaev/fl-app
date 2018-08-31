import React from 'react';
import { render , component} from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import { userValid } from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// const axios = require('../../node_modules/axios/index');



class Home extends React.Component {
  render() { 
    return (
      <div>
        <h1>Home</h1>
        <h2>Welcom to our Great Network: Oleg Pukhaev</h2>
        <p>email: nuba8184@gmail.com</p>
      </div>    
    );
  }
}

export default Home;