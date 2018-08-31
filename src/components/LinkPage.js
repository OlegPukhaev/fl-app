import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import {exitUser, userValid} from '../reducers/getUser';
var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');



const axios = require('../../node_modules/axios/index');

    // Make a request for a user with a given ID
    // axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/pusher');
    // axios.post('https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/skill_tags');
    // https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/user
    // axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/media')
      // .then(function (response) {
      //   // handle success
      //   console.log(' my data ', response);
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log('my errors' , error);
      // })
      // .then(function () {
      //   // always executed
      // });


class LinkPage extends React.Component {
constructor (props) {
    super(props);

    Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});
    this.onClickSignOut = this.onClickSignOut.bind(this);
    // this.exitUser = this.exitUser.bind(this);
}

exitUser = () => this.props.dispatch(exitUser());
userValid = (value) => this.props.dispatch(userValid(value));

onClickSignOut () {
    Auth.signOut();
    this.exitUser();
    this.userValid(false);
}

  render() {
    return (
      <div id="userform">
        Hello: {Auth.user.full_name}<br></br>
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
