import Reactotron from 'reactotron-react-js';
import React from 'react';
import JobBoxJobsList from './JobBoxJobsList';

class JobBoxJobs extends React.Component {
	constructor (props) {
		super(props)
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

export default JobBoxJobs;