import Reactotron from 'reactotron-react-js';
import React from 'react';
import {getData} from '../../functions/api';
import {getRequest} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getTellentsData} from './../../reducers/search'
import JobBoxTellentList from './JobBoxTellentList';
import { returnRequestObj } from '../../functions/function';
const queryString = require('query-string');

class JobBoxTellent extends React.Component {
	constructor (props){
		super(props);
	}

	componentDidMount = () => {
		var requestObj = getRequest(this.props.search.config);
		// Reactotron.log("new state here!!!!", requestObj );
		var StringifyQ = queryString.stringify({
			// q: JSON.stringify(this.props.search.config)
			q: JSON.stringify(requestObj)
		});
		getData('/api/v1/tellents/search?'+StringifyQ).then(apiData => {
			this.props.getTellentsData(apiData.data);
			Reactotron.log("from server", apiData.data);
		});
	}

	eachUser = (item, index) => {
		return <JobBoxTellentList data={item} id={index}/>
	}

  render() { 
		Reactotron.warn(this.props.data);
    return (
    <div class="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
      {/* {this.props.data !== null && this.props.data.users.map(this.eachUser)} */}
      {this.props.data !== null && this.props.search.tellentsData.users.map(this.eachUser)}
			{/* <JobBoxTellentList /> */}
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
			{
				getTellentsData
			},
			dispatch
	);
};

function mapStateToProps (state) {
	return  {
			search:state.search
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBoxTellent);