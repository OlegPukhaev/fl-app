import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class PostButton extends React.Component {

	render() {
		// Reactotron.log(this.props.modalWinToggler);
    return (
      <div className="form-block-wrapper btn-block">
        <button className="btn btn-blue btn-bold">Preview Before Posting</button>
        <button className="btn btn-blue btn-bold">Continue</button>
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
			modalWinToggler:modalWinToggler(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PostButton)