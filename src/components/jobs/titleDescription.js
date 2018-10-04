import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, inputTitle, inputDescription} from './../../reducers/jobs';
import {modalWinToggler, title, description} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class TitleDescription extends React.Component {

	inputDescription = (event) => {
		this.props.inputDescription(event.target.value);
	}

	inputTitle = (event) => {
		this.props.inputTitle(event.target.value);
	}

	render() {
		// Reactotron.log(this.props.title, this.props.description);
    return (
      <div className="form-block">
        <div className="post-job-inputs form-block-wrapper">
          <input type="text" placeholder="Job Title" className="job-title form-control" onChange={this.inputTitle} />
          <textarea placeholder="Job Description" className="form-control job-descr" rows="4" onChange={this.inputDescription}></textarea>
        </div>
      </div>
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
				winToggler,
				inputTitle,
				inputDescription
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			modalWinToggler:modalWinToggler(state),
			title:title(state),
			description:description(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(TitleDescription)