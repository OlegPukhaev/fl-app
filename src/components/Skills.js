import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {CONFIG} from '../functions/config';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import SkillsStepThree from './SkillsStepThree';
import SkillsStepOne from './SkillsStepOne';
import SkillsStepTwo from './SkillsStepTwo';
import {getSkills} from '../reducers/userSkills';
import axios from 'axios';

class Skills extends React.Component {
constructor () {
  super();
 
}

  getSkillsData = () => {
    axios.get('/api/v1/profile/skills/user')
    .then(response => {
      this.props.getSkills(response.data);
    })
    .catch(function (error) {
      console.log('my errors' , error);
      return false;
    });  
  }

  onClickGetState = (obj) => {
    var obj = "Новые данные  0000";
    this.props.getSkills(obj);
  }

  render() { 
    return (
    <div class="tab-content my-central-info ">
      <div role="tabpanel" class="tab-pane my-tab step-3-open active" id="skills">
        <div class="steps-nav flexbox justify-space-between">
          <div class="steps-nav-title">Your Shared Skills</div>
          <div class="steps-nav-btn">
            <div class="btn-group step-2-btn clearfix">
              <button type="button" class="btn btn-blue-border btn-bold step-1-toggler step-toggler">Back</button>
              <button type="button" class="btn btn-blue btn-bold step-3-toggler step-toggler">Done</button>
            </div>
            <button type="button" class="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler">Add</button>
          </div>
        </div>

        <SkillsStepOne />
        <SkillsStepTwo />
        <SkillsStepThree />

        <div class="skills-footer">
          <a href="#">
            <span class="icon icon-add btn btn-blue add-btn"></span>
            Add Here New Teachers Skill Category
          </a>
        </div>
      </div>
    </div>   
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSkills
    },
    dispatch
  );
 };

function mapStateToProps (state){
  return {
    skills: state.skills,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)