import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';
import User from './User';
import Home from './Home';
import Tellent from './Tellent';
import {getToken} from '../functions/config';
import {setUserStatus} from './../reducers/getUser';
// import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class LinkPage extends React.Component {
constructor (props) {
    super(props);
}

componentDidMount = () => {
  // if (getToken()) {
    this.props.setUserStatus(true);
  // }
}

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <h1>Menu</h1>
            {this.props.user.isUserLogin == false && <Link to="/User"> Login | </Link>} 
            <Link to="/">Home </Link>
            {this.props.user.isUserLogin === true && <Link to="/Main">| Main </Link>}
            {this.props.user.isUserLogin == true && <Link to="/Tellent">| Tellent </Link>}
            {/* <Link to="/Tellent">| Tellent </Link> */}
            
            <Switch>
              <Route exact path="/User" component={User} />
              <Route exact path="/" component={Home} />
              <Route exact path="/Main" component={Main} />
              <Route exact path="/tellent" component={Tellent} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
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