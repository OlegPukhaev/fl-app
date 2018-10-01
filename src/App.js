import Reactotron from 'reactotron-react-js';
import React, { Component } from 'react';

import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/media.css';
import './js/jquery-2.1.1.min.js';
// import './bootstrap/js/bootstrap.min.js';
// import './js/main.js';

// <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
// <!-- Include all compiled plugins (below), or include individual files as needed -->
// <script src="bootstrap/js/bootstrap.min.js"></script>

// <script src="js/main.js"></script>


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
