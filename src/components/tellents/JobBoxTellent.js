import Reactotron from 'reactotron-react-js';
import React from 'react';
import {getData} from '../../functions/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobBoxTellentList from './JobBoxTellentList';
import { returnRequestObj } from '../../functions/function';
const queryString = require('query-string');

// import '../../App.css';

class JobBoxTellent extends React.Component {
	constructor (props){
		super(props);
	}

	componentWillReceiveProps () {

		var requestObj = returnRequestObj("exp",this.props.search.config.exp);
		Reactotron.log("new state here!!!!", requestObj );
		
		// var obj = {"exp":requestObj.join(",")};

		var StringifyQ = queryString.stringify({
			// q: JSON.stringify(this.props.search.config)
			q: JSON.stringify(requestObj)
		});
		getData('/api/v1/tellents/search?'+StringifyQ).then(apiData => {
			// this.props.getTellentsData(apiData.data);
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
      {this.props.data !== null && this.props.data.users.map(this.eachUser)}
			{/* <JobBoxTellentList /> */}
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
			{

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