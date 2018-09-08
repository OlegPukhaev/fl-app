import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Test from './Test';
import Home from './Home';
import Main from './Main';
import User from './User';
import Tellent from './Tellent';
import {getToken} from '../functions/config';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class Menu extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
              <h1>Menu</h1>
              <ul>
                <li><Link to="/Main">Main</Link></li>
                <li><Link to="/tellent">Tellent</Link></li>
              </ul>
            <Route exact path="/home" component={Home} />
            <Route path="/Main" component={Main} />
            <Route path="/tellent" component={Tellent} />
        </div>
      </BrowserRouter>
    );
  }
}

class LinkPage extends React.Component {
constructor (props) {
    super(props);

    // this.onClickSignOut = this.onClickSignOut.bind(this);
}

componentDidMount = () => {
  //сделать проверку на авторизацию и на Local storage есил существует то и то тогда записать в сторе состояние для 
  //выбора Меню или Юзера
}

// onClickSignOut () {
//   localStorage.clear()
//   Auth.signOut();
//   this.userValid(null);
// }

  render() {
    return (
      <div>
        {/* {getToken() !== false ? <Menu /> : <User />} */}
        {getToken() !== false ? <Test /> : <User />}
      </div>
    );
  }
}

export default LinkPage;