import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import {exitUser} from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');

Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});

class LinkPage extends React.Component {
constructor (props) {
    super(props);

    this.onClickSignOut = this.onClickSignOut.bind(this);
    this.exitUser = this.exitUser.bind(this);
}

exitUser = () => this.props.dispatch(exitUser());

onClickSignOut () {
    Auth.signOut();
    this.exitUser();
}

  render() {
    return (
      <div id="userform">
        Hello: {this.props.user.userinfo.full_name}<br></br>
        {/* {console.log("lll", this.props.user.userinfo)} */}
        <button type="button" onClick={this.onClickSignOut}>Sign Out</button>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(LinkPage);
