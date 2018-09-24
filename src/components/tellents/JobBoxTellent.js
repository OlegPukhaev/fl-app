import Reactotron from 'reactotron-react-js';
import React from 'react';
import {getData} from '../../functions/api';
import {getRequest} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getTellentsData} from './../../reducers/search'
import JobBoxTellentList from './JobBoxTellentList';
const queryString = require('query-string');

class JobBoxTellent extends React.Component {
	constructor (props){
		super(props);
	}

	componentDidMount = () => {
		var requestObj = getRequest(this.props.search.config);
		var StringifyQ = queryString.stringify({
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
      {this.props.data !== null && this.props.search.tellentsData.users.map(this.eachUser)}
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