import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../functions/api';
import '../../App.css';
// import '../../node_modules/toastr/build/toastr.css';

import SkillsStepThree from './SkillsStepThree';
import SkillsStepOne from './SkillsStepOne';
import SkillsStepTwo from './SkillsStepTwo';
import {getSkills, setActiveWin, getMenuSkills} from '../reducers/userSkills';
import {arrForUpdate} from './../functions/function';
import axios from 'axios';

class Skills extends React.Component {
constructor () {
  super()
}

componentDidMount = () => {
  getData('/api/v1/profile/skills/user').then(apiData => {
    this.props.getSkills(apiData.data.profession_categories);
    this.props.getMenuSkills(apiData.data.profession_categories);
  });
};

allSkills = (item, index) => {
  if (item.selected !== false) {
    return (
      <li id={item.id} key={index}>{item.name}</li>
    );
  }
};

onClickAddSkills = () => {
  this.props.setActiveWin("step-1-open", null);  
}

updateApiData = (value) => {
  axios({
      method: 'post',
      url: 'https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills',
      data: {
          categories : value
      }
    });
}

onClickSendApi = () => {
  this.props.setActiveWin("step-3-open", null)
  var updateObj = this.props.skills.categories;
  this.updateApiData(arrForUpdate(updateObj));
}

onClickBack = () => {
  this.props.setActiveWin(this.props.skills.backWindow, null )
}

  render() { 
    return (
    <div class="tab-content my-central-info ">
      <div role="tabpanel" class="tab-pane my-tab active" class={this.props.skills.activeWin} id="skills">
        <div class="steps-nav flexbox justify-space-between">
          <div class="steps-nav-title">Your Shared Skills</div>
          <div class="steps-nav-btn">
            <div class="btn-group step-2-btn clearfix">
              <button type="button" class="btn btn-blue-border btn-bold step-1-toggler step-toggler" onClick={this.onClickBack}>Back</button>
              <button type="button" class="btn btn-blue btn-bold step-3-toggler step-toggler" onClick={this.onClickSendApi}>Done</button>
            </div>
            <button type="button" class="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler" onClick={this.onClickAddSkills}>Add</button>
          </div>
        </div>

        {this.props.skills.activeWin === "step-1-open" && <SkillsStepOne />}
        {this.props.skills.activeWin === "step-2-open" && <SkillsStepTwo />}
        {this.props.skills.activeWin === "step-3-open" && <SkillsStepThree skills={this.props.skills}/>}

      </div>
    </div>   
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSkills,
      setActiveWin,
      getMenuSkills
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