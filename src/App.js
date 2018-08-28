import React, { Component } from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <User />
        </div>
      </Provider>
    );
  }
}

export default App;
