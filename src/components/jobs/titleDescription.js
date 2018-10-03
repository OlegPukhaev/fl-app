import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class titleDescription extends React.Component {

	render() {
		// Reactotron.log(this.props.modalWinToggler);
    return (
      <div className="form-block">
        <div className="post-job-inputs form-block-wrapper">
          <input type="text" placeholder="Job Title" className="job-title form-control" />
          <textarea placeholder="Job Description" className="form-control job-descr" rows="4"></textarea>
        </div>
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
	
	export default connect(mapStateToProps, mapDispatchToProps)(titleDescription)