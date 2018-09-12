import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillBlock from './SkillBlock';
import SkillTags from './SkillTags';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepTwo extends React.Component {
  constructor(props){
    super(props);
  }
  render() { 
    return (
      <div class="step-2">
        <div class="skill-subcat">
            <div class="flexbox justify-space-between">
               {/* {Reactotron.log(this.props.skills.addSkillId)} */}
              <SkillBlock 
                id={this.props.skills.addSkillId} 
                data={this.props.skills.skillsdata[this.props.skills.addSkillId]}
              />

              <SkillTags />

            </div>
        </div>
      </div>       
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // removeSkill
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsStepTwo);
