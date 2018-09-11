import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {CONFIG} from '../functions/api';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import SkillsStepThree from './SkillsStepThree';
import SkillsStepOne from './SkillsStepOne';
import SkillsStepTwo from './SkillsStepTwo';
import {getSkills} from '../reducers/userSkills';
import axios from 'axios';

class Skills extends React.Component {
constructor () {
  super()

}

componentWillMount = () => {
  axios.get('/api/v1/profile/skills/user')
  .then(response => {
    this.props.getSkills(response.data.profession_categories);
  })
  .catch(function (error) {
    console.log('my errors' , error);
    return false;
  }); 
};

allSkills = (item, index) => {
  if (item.selected !== false) {
    return (
      <li id={item.id} key={index}>{item.name}</li>
    );
  }
};

  render() { 
    // Reactotron.log(this.props.skills); 
    return (
    <div class="tab-content my-central-info ">
      <div role="tabpanel" class="tab-pane my-tab active" class={this.props.skills.activeWin} id="skills">
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

        <SkillsStepOne data={this.props.skills}/>
        <SkillsStepTwo />
        <SkillsStepThree skills={this.props.skills}/>

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

function mapStateToProps (state) {
  return  {
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)