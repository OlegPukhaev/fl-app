import Reactotron from 'reactotron-react-js';
import React from 'react';
import {getData} from '../../functions/api';
import {getRequestJobs} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getJobsData} from './../../reducers/search';
import JobBoxJobsList from './JobBoxJobsList';
const queryString = require('query-string');

class JobBoxJobs extends React.Component {
	constructor (props) {
		super(props)
	}

	componentDidMount = () => {
		// // var requestObj = ;
		// var StringifyQ = queryString.stringify({
		// 	q: JSON.stringify(getRequestJobs(this.props.search.configJobs))
		// });
		// getData('/api/v1/jobs/search?'+StringifyQ).then(apiData => {
		// 	this.props.getJobsData(apiData.data);
		// 	Reactotron.log("from server", apiData.data);
		// });
	}

	eachJob = (item, index) => {
		return <JobBoxJobsList data={item} id={index}/>
	}
 
  render() { 
    return (
    	<div class="job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">								
				{this.props.data !== null && this.props.data.jobs.map(this.eachJob)}
				{/* <JobBoxJobsList /> */}
    	</div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
			{
				getJobsData
			},
			dispatch
	);
};

function mapStateToProps (state) {
	return  {
			search:state.search
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (JobBoxJobs);