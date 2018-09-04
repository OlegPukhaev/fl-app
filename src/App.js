import React, { Component } from 'react';
// import {connect} from 'react-redux';

import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <div> */}
          <Main />
        {/* </div> */}
      </Provider>
    );
  }
}

export default App;
