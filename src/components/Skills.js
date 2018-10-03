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
import {fetchValidateToken} from './../functions/auth';
import {successMessage, warningMessage} from './../functions/function';

class Skills extends React.Component {
constructor () {
  super()
}

componentDidMount = () => {

  // if (document.cookie) {
    fetchValidateToken().then(response => {
      if (response !== "error" ){
        this.props.setUserStatus(true);
        return;
      } else {
        warningMessage(`Только зарегестрированные пользователи`);
        this.props.setUserStatus(false);
        return;
      }
    })
  // } else {
  //   this.props.setUserStatus(false);
  //   // this.props.history.push('/user');
  // }
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
      <div className="content">
        <div className="container-fluid">
          <div className="panel panel-default my-main-panel">
            <div className="panel-body">
              <div className="flexbox">
              
                <div className="right-col">
                  {/* <!-- Nav tabs --> */}
                  <ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
                    <li role="presentation">
                      <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">
                        <span className="icon icon-overview"></span>
                        Overview
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
                        <span className="icon icon-message"></span>
                        Messages
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#my-jobs" aria-controls="my-jobs" role="tab" data-toggle="tab">
                        <span className="icon icon-jobs"></span>
                        My Jobs
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#my-promo" aria-controls="my-promo" role="tab" data-toggle="tab">
                        <span className="icon icon-promo"></span>
                        My Promo
                      </a>
                    </li>
                    <li role="presentation" className="active">
                      <a href="#skills" aria-controls="skills" role="tab" data-toggle="tab">
                      <span className="icon icon-skills"></span>
                        My Skills
                      </a>
                    </li>
                    <li role="presentation" >
                      <a href="#saved" aria-controls="saved" role="tab" data-toggle="tab">
                        <span className="icon icon-saved"></span>
                        Saved
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#media" aria-controls="media" role="tab" data-toggle="tab">
                        <span className="icon icon-media"></span>
                        My Media
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#accounts" aria-controls="accounts" role="tab" data-toggle="tab">
                        <span className="icon icon-accounts"></span>
                        Accounts
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
                        <span className="icon icon-profile"></span>
                        Profile
                      </a>
                    </li>
                  </ul>
              </div>	{/* <!--right-col End--> */}

                <div className="left-col">
                  <div className="tab-content my-central-info">
                    {/* <!--Skills page START --> */}
                    {/* {this.props.isUserLogin === true && <Skills />}
                    {this.props.isUserLogin === true && <Tellent />} */}
                    <div className="tab-content my-central-info ">
                      <div role="tabpanel" className="tab-pane my-tab active" class={this.props.activeWin} id="skills">
                        <div className="steps-nav flexbox justify-space-between">
                          <div className="steps-nav-title">Your Shared Skills</div>
                          <div className="steps-nav-btn">
                            <div className="btn-group step-2-btn clearfix">
                              <button type="button" className="btn btn-blue-border btn-bold step-1-toggler step-toggler" onClick={this.onClickBack}>Back</button>
                              <button type="button" className="btn btn-blue btn-bold step-3-toggler step-toggler" onClick={this.onClickUpdateCategories}>Done</button>
                            </div>
                            <button type="button" className="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler" onClick={this.onClickAddSkills}>Add</button>
                          </div>
                        </div>
                          {this.props.activeWin === "step-1-open" && <SkillsStepOne />}
                          {this.props.activeWin === "step-2-open" && <SkillsStepTwo />}
                          {this.props.activeWin === "step-3-open" && <SkillsStepThree />}
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div> 
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