import Reactotron from 'reactotron-react-js';
import React from 'react';
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';
import User from './User';
import Home from './Home';
import Tellent from './Tellent';
// import {getToken} from '../functions/config';
import {setUserStatus} from './../reducers/getUser';
import {fetchValidateToken} from './../functions/auth';
// import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
var toastr = require('../../node_modules/toastr/toastr');

class LinkPage extends React.Component {
constructor (props) {
    super(props);
}

componentWillMount = () => {
  if (document.cookie) {

    fetchValidateToken().then(response => {
      toastr.success(`Урраааа валидация ф кармане : ${response.full_name}`);
      this.props.setUserStatus(true);
    }).catch(error => {
      // toastr.success(error);
      toastr.warning(`Ошибке : ${error}`);
      this.props.history.push('/User');
    }) 

  } else this.props.setUserStatus(false);
}

  render() {
    Reactotron.log("User", this.props.user.isUserLogin);
    return (

        // <Main />
        <BrowserRouter>
          <div>
            <h1>Menu</h1>
            {this.props.user.isUserLogin == false && <Link to="/user"> Login  </Link>} 
            <Link to="/">Home </Link>
            {this.props.user.isUserLogin === true && <Link to="/skills"> | Skills | </Link>}
            {this.props.user.isUserLogin == true && <Link to="/tellent"> Tellent </Link>}
            {/* <Link to="/Tellent">| Tellent </Link> */}
            
            <Switch>
              <Route exact path="/user" component={User} />
              <Route exact path="/" component={Home} />
              <Route exact path="/skills" component={Main} />
              <Route exact path="/tellent" component={Tellent} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUserStatus
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkPage);