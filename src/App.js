import React, { Component } from 'react';
// import {connect} from 'react-redux';

import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {getToken} from '../src/functions/config';
import Main from './components/Main';
import User from './components/User';
import LinkPage from './components/LinkPage';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LinkPage />
      </Provider>
    );
  }
}

export default App;
