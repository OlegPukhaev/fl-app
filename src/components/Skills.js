import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../node_modules/toastr/build/toastr.css';
import SkillsStepThree from './SkillsStepThree';
import SkillsStepOne from './SkillsStepOne';
import SkillsStepTwo from './SkillsStepTwo';
import {getSkills, setActiveWin, getMenuSkills} from '../reducers/userSkills';
import {activeWin, backWindow, getActiveCategories} from './../selectors';
import {arrForUpdate} from './../functions/function';
import {fetchUserSkills, fetchSkillCategories} from './../functions/api';

class Skills extends React.Component {
constructor () {
  super()
}

componentDidMount = () => {

  fetchUserSkills().then(response => {
    if (response !== false) {
      this.props.getSkills(response.data.profession_categories);
      this.props.getMenuSkills(response.data.profession_categories);
    }
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

onClickUpdateCategories = () => {
  this.props.setActiveWin("step-3-open", null)
  var updateObj = this.props.getActiveCategories;
  // Reactotron.log(updateObj);
  fetchSkillCategories(arrForUpdate(updateObj));
}

onClickBack = () => {
  this.props.setActiveWin(this.props.backWindow, null )
}

  render() { 
    return (


            <div class="tab-content my-central-info ">
              <div role="tabpanel" class="tab-pane my-tab active" class={this.props.activeWin} id="skills">
                <div class="steps-nav flexbox justify-space-between">
                  <div class="steps-nav-title">Your Shared Skills</div>
                  <div class="steps-nav-btn">
                    <div class="btn-group step-2-btn clearfix">
                      <button type="button" class="btn btn-blue-border btn-bold step-1-toggler step-toggler" onClick={this.onClickBack}>Back</button>
                      <button type="button" class="btn btn-blue btn-bold step-3-toggler step-toggler" onClick={this.onClickUpdateCategories}>Done</button>
                    </div>
                    <button type="button" class="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler" onClick={this.onClickAddSkills}>Add</button>
                  </div>
                </div>

                  {this.props.activeWin === "step-1-open" && <SkillsStepOne />}
                  {this.props.activeWin === "step-2-open" && <SkillsStepTwo />}
                  {this.props.activeWin === "step-3-open" && <SkillsStepThree />}

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
    activeWin: activeWin(state),
    backWindow: backWindow(state),
    getActiveCategories: getActiveCategories(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)