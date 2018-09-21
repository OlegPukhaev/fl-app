import Reactotron from 'reactotron-react-js';
import React from 'react';
import {getData} from '../../functions/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobBoxTellentList from './JobBoxTellentList';
const queryString = require('query-string');

// import '../../App.css';

class JobBoxTellent extends React.Component {
	constructor (props){
		super(props);
	}

	componentWillReceiveProps () {
		
		var requestData = this.props.search.config;
		
		var requestFilter = requestData.exp.filter(item => {
			if (item.selected === true ) {
				return item;
			};
		});

		var vvv = requestFilter.map(item => {
			if(item.selected === true) return item.id;
		});

		var obj = {"exp":vvv.join(",")};
		Reactotron.log("new state here!!!!", obj );

		var StringifyQ = queryString.stringify({
			// q: JSON.stringify(this.props.search.config)
			q: JSON.stringify(obj)
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