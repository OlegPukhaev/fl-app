import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler, termsAgree, skillConfig, chooseIsChecked} from './../../selectors';
import './../../App';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import {successMessage, warningMessage, getPostJobsObject} from './../../functions/function';
import {fetchPostJob} from './../../functions/api';

const queryString = require('query-string');

class PostButton extends React.Component {
constructor (props) {
	super(props);
}

	onButtonClick = () => {
		var request = getPostJobsObject(this.props.config, chooseIsChecked);
		fetchPostJob(request).then(response => {
			if (request !== "Error") {
				// this.props.history.push('/tellents');
				}
			});
			Reactotron.log({request: request});

	}

	render() {
		// Reactotron.log({terms: this.props.termsAgree});
		const { chooseIsChecked } = this.props;
    return (
      <div className="form-block-wrapper btn-block">
        <button className="btn btn-blue btn-bold" disabled={this.props.termsAgree} onClick={this.onButtonClick}>Continue</button>
      </div>
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
				winToggler
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			modalWinToggler:modalWinToggler(state),
			termsAgree:termsAgree(state),
			config:skillConfig(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PostButton)