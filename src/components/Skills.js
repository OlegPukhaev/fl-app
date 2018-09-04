import React from 'react';
import {connect} from 'react-redux';
// import { render , component} from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import SkillsStepThree from './SkillsStepThree';
import SkillsStepOne from './SkillsStepOne';
import SkillsStepTwo from './SkillsStepTwo';
import {getToken} from './../functions/config';
import {getSkills} from '../reducers/userSkills'
// var Auth = require('../../node_modules/j-toker/src/j-toker.js');
// const axios = require('../../node_modules/axios/index');

var configapi = getToken();
const axios = require('../../node_modules/axios');
axios.defaults.headers.common['access-token'] = configapi['access-token'];
axios.defaults.headers.common['expiry'] = configapi['expiry'];
axios.defaults.headers.common['token-type'] = configapi['token-type'];
axios.defaults.headers.common['uid'] = configapi['uid'];
axios.defaults.headers.common['client'] = configapi['client'];
axios.defaults.baseURL = 'https://floating-atoll-63112.herokuapp.com';

axios.get('/api/v1/profile/skills/user')
      .then(function (response) {
        // handle success
        console.log(' my data - data', response);
        
      })
      .catch(function (error) {
        // handle error
        console.log('my errors' , error);
      })
      .then(function () {
        // always executed
        getSkills("Oleg Nubo molodec");
      });


class Skills extends React.Component {
constructor (props) {
  super(props);
  
  this.state = {}
  this.getSkillsData = this.getSkillsData.bind(this);
  this.onClickGetState = this.onClickGetState.bind(this);
}

  getSkills = (value) => this.props.dispatch(getSkills(value));

  getSkillsData () {
    
  }

  onClickGetState () {
    var obj = "Новые данные";
    this.getSkills(obj);
  }


  render() { 
    return (
    <div class="tab-content my-central-info">
    Данные -- ++ : {this.props.skills.skillsinfo}
    <button type="button" onClick={this.onClickGetState}>click</button>
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

function mapStateToProps (state){
  return {
    skills: state.skills,
    user: state.user
  }
}

export default connect(mapStateToProps)(Skills)