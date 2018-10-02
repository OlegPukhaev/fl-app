import Reactotron from 'reactotron-react-js';

import React from 'react';
import {fetchJobsData} from '../../functions/api';
import {getRequestJobs} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setCurrPageTellents, setCurrPageJobs, getNextJobsPage} from './../../reducers/search';
import {jobsData, tellentsData, isTellents, isJobs, configJobs} from './../../selectors';
import JobBoxJobsList from './JobBoxJobsList';
const queryString = require('query-string');

class LoadMore extends React.Component {
	// constructor (props) {
	// 	super(props)
	// }

  loadMore = () => {
    if (this.props.isJobs === true) {
      // alert(this.props.jobsData.meta.current_page + "->" + this.props.jobsData.meta.next_page);
      if (this.props.jobsData.meta.next_page !== null) {
        this.props.setCurrPageJobs(this.props.jobsData.meta.next_page);
        
        var StringifyQ = queryString.stringify({
          q: JSON.stringify(getRequestJobs(this.props.configJobs))
        });
        fetchJobsData(StringifyQ, this.props.jobsData.meta.next_page).then(response => {
          Reactotron.log('***>',response.data);
          this.props.getNextJobsPage(response.data);
          // this.props.getJobsData(response.data);	
        });

      }
    }
    if (this.props.isTellents === true) {
      // alert(this.props.tellentsData.meta.current_page + "->" + this.props.tellentsData.meta.next_page);
      if (this.props.tellentsData.meta.next_page !== null) this.props.setCurrPageTellents(this.props.tellentsData.meta.next_page);

    }
  }

  render() { 
    return (
      <div class="job-boxes-footer">
        <button id="load-button" class="btn btn-bg-transparent blue-color btn-bold" onClick={this.loadMore}>Load more</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
			{
        setCurrPageTellents,
        setCurrPageJobs,
        getNextJobsPage
			},
			dispatch
	);
};

function mapStateToProps (state) {
	return  {
			// search:state.search,
			isJobs: isJobs(state),
			isTellents:isTellents(state), 
			jobsData:jobsData(state),
			tellentsData:tellentsData(state),
			configJobs: configJobs(state)

	}
}

export default connect(mapStateToProps, mapDispatchToProps) (LoadMore);