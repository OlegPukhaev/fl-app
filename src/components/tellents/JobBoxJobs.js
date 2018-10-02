import Reactotron from 'reactotron-react-js';
import React from 'react';
import {fetchJobsData} from '../../functions/api';
import {getRequestJobs} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getJobsData, setTotalCount} from './../../reducers/search';
import {jobsData, isTellents, isJobs, configJobs, currentJobsPage } from './../../selectors';
import JobBoxJobsList from './JobBoxJobsList';
const queryString = require('query-string');

class JobBoxJobs extends React.Component {

	componentDidMount = () => {
		var StringifyQ = queryString.stringify({
			q: JSON.stringify(getRequestJobs(this.props.configJobs))
		});
		// alert(this.props.currPage);
		fetchJobsData(StringifyQ, this.props.currentJobsPage).then(response => {
			this.props.getJobsData(response.data);	
		});
	}

	eachJob = (item, index) => {
		return <JobBoxJobsList data={item} id={index} key={index}/>
	}
 
  render() { 
    return (
    	<div class="job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">								
				{	this.props.jobsData !== null && this.props.jobsData.jobs.map(this.eachJob)}
    	</div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
			{
				getJobsData,
				setTotalCount
			},
			dispatch
	);
};

function mapStateToProps (state) {
	return  {
		jobsData:jobsData(state),
		isJobs: isJobs(state),
		isTellents:isTellents(state), 
		configJobs: configJobs(state),
		currentJobsPage: currentJobsPage(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (JobBoxJobs);