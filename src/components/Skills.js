import React from 'react';
import { render , component} from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import SkillsStepThree from './SkillsStepThree';
import SkillsStepOne from './SkillsStepOne';
import SkillsStepTwo from './SkillsStepTwo';
// import { userValid } from '../reducers/getUser';
// import {getToken} from './../functions/config';
var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// const axios = require('../../node_modules/axios/index');

class Skills extends React.Component {
  render() { 
    return (
    <div class="tab-content my-central-info">
      <div role="tabpanel" class="tab-pane my-tab step-3-open" id="skills">
        <div class="steps-nav flexbox justify-space-between">
          <div class="steps-nav-title">Your Shared Skills</div>
          <div class="steps-nav-btn">
            <div class="btn-group step-2-btn clearfix">
              <button type="button" class="btn btn-blue-border btn-bold step-1-toggler step-toggler">Back</button>
              <button type="button" class="btn btn-blue btn-bold step-3-toggler step-toggler">Done</button>
            </div>
            <button type="button" class="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler">Add</button>
            {/* <button type="button" class="btn btn-blue btn-bold step-3-btn">Add</button> */}
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


function mapDispatchToProps(dispatch){
  return {
    // add: () => dispatch(addTodo())
  }
}

function mapStateToProps (state){
  return {
    user: state.user
  }
}

// export default Skills;
export default connect(mapStateToProps, mapDispatchToProps)(Skills)