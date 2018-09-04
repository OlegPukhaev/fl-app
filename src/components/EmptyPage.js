import React from 'react';
// import {connect} from 'react-redux';
// import { render , component} from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class EmptyPage extends React.Component {
  render() { 
    return (
    <div role="tabpanel" class="tab-pane my-tab" id="overview">
        Тут Пусто
    </div>      
    );
  }
}

export default EmptyPage;