import Reactotron from 'reactotron-react-js';
import React from 'react';
import JobBoxTellentList from './JobBoxTellentList';
// import '../../App.css';

class JobBoxTellent extends React.Component {
	constructor (props){
		super(props);
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

export default JobBoxTellent;