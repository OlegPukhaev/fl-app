import Reactotron from 'reactotron-react-js';
import React, { Component } from 'react';

import './App.css';
import createStore from './reducers/createStore';
import {Provider} from 'react-redux';
import LinkPage from './components/LinkPage';


class App extends Component {
  render() {
    // Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } })
    // Reactotron.warn('*glares*')
    // Reactotron.error('Now you\'ve done it.')

    // Reactotron.display({
    //   name: 'KNOCK KNOCK',
    //   preview: 'Who\'s there?',
    //   value: 'Orange.'
    // })
    
    // Reactotron.display({
    //   name: 'ORANGE',
    //   preview: 'Who?',
    //   value: 'Orange you glad you don\'t know me in real life?',
    //   important: true
    // })
    return (
      <Provider store={createStore}>
        <LinkPage />
      </Provider>
    );
  }
}

export default App;
