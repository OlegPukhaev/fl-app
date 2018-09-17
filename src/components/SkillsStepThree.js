import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeSkill} from './../reducers/userSkills';
import SkillSubcat from './SkillSubcat';
// import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepThree extends React.Component {
	constructor (props) {
		super(props);
	}

  render() { 
    return (
      <div class="step-3">
            <SkillSubcat skills={this.props.skills}/>
      </div>  
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeSkill
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsStepThree)