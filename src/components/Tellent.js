import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import { userValid } from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// const axios = require('../../node_modules/axios/index');

class Tellent extends React.Component {
    render() {
      return (
        <div>
          <h3>Tellent</h3>
          <p>Поиск проектов и фрилансеров </p>
        </div>
      );
    }
  }

  export default Tellent;