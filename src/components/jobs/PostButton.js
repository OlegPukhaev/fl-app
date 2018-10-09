import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler, termsAgree, skillConfig} from './../../selectors';
import './../../App';
import {successMessage, warningMessage, getPostJobsObject} from './../../functions/function';
import {fetchPostJob} from './../../functions/api';

const queryString = require('query-string');

class PostButton extends React.Component {

	onButtonClick = () => {
		var request = getPostJobsObject(this.props.config);
		fetchPostJob(request).then(response => {
			successMessage(response);
		});
			Reactotron.log({request: request});

	}

	render() {
		// Reactotron.log({terms: this.props.termsAgree});
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