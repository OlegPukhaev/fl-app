import React from 'react';
import { render , component} from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
// import { userValid } from '../reducers/getUser';
// import {getToken} from './../functions/config';
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// const axios = require('../../node_modules/axios/index');

class Skills extends React.Component {
  render() { 
    return (
      <div>
        <h3>Skills</h3>
        <p>Добавление скиллс</p>
      </div>    
    );
  }
}


function mapDispatchToProps(dispatch){
  return {
    // add: () => dispatch(addTodo())
  }
}

function mapStateToProps (state){
  return {
    user: state.user
  }
}

// export default Skills;
export default connect(mapStateToProps, mapDispatchToProps)(Skills)