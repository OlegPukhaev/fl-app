import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import {addSkillId, getAllSkillData} from './../selectors';
import SkillBlock from './SkillBlock';
import SkillTags from './SkillTags';
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
              <SkillBlock 
                id={this.props.addSkillId} 
                data={this.props.getAllSkillData[this.props.addSkillId]}
              />

              <SkillTags id={this.props.addSkillId}/>

            </div>
        </div>
      </div>       
    );
  }
}

function mapStateToProps (state) {
  return  {
    // skills: state.skills,
    getAllSkillData: getAllSkillData(state),
    addSkillId: addSkillId(state)
  }
}

export default connect(mapStateToProps)(SkillsStepTwo);
