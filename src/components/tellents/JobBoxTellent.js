import Reactotron from 'reactotron-react-js';
import React from 'react';
import {fetchTellentsData} from '../../functions/api';
import {getRequest} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getTellentsData, setTotalCount} from './../../reducers/search';
import {tellentsData, isTellents, isJobs, configTellents} from './../../selectors';

import JobBoxTellentList from './JobBoxTellentList';
const queryString = require('query-string');

class JobBoxTellent extends React.Component {
	constructor (props){
		super(props);
	}

	componentDidMount = () => {
		var StringifyQ = queryString.stringify({
			q: JSON.stringify(getRequest(this.props.configTellents))
		});
		fetchTellentsData(StringifyQ).then(response => {
			Reactotron.log('stringify',response);
			this.props.getTellentsData(response.data);	
		});
	}

	eachUser = (item, index) => {
		return <JobBoxTellentList data={item} id={index}/>
	}

  render() { 
		// Reactotron.warn(this.props.data);
    return (
    <div class="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
      {this.props.tellentsData !== null && this.props.tellentsData.users.map(this.eachUser)}
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
			{
				getTellentsData,
				setTotalCount
			},
			dispatch
	);
};

function mapStateToProps (state) {
	return  {
			search:state.search,
			configTellents: configTellents(state),
			tellentsData:tellentsData(state),
			isTellents:isTellents(state), 
			isJobs: isJobs(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBoxTellent);