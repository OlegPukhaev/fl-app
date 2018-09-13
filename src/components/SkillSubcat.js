import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeSkill, setActiveWin} from './../reducers/userSkills';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import {CONFIG} from '../functions/api';
import axios from 'axios';
import {arrForUpdate} from './../functions/function';

class SkillSubcat extends React.Component {
  constructor(props){
    super(props);
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

  onClickDeleteSkills = (event) => {
    this.props.removeSkill(event.target.id);
    var delObj = this.props.skills.categories.filter(item => item.id != event.target.id);
    this.updateApiData(arrForUpdate(delObj));
  }

  skillBlockList = (item) => {
    if (item.selected === true)
      return (
        <div class="checkbox-block" key={item.id}>
          <input type="checkbox" id="math-1" checked />
          <label for="math-1" >
            <span class="checkbox-circle" >
              <span class="icon icon-check-mark" ></span>
            </span>
            <span class="checkbox-text" >{item.name}</span>
          </label>
        </div>
      );
  }

  skillsTagList = (item) => {
    return (
      <div class="skill-tag" key={item.id}>{item.name}</div>
    );  
  }

  onClickEditSkill = (event) => {
    // alert(event.target.id);
    this.props.setActiveWin("step-2-open", event.target.id);
  }

  allSkills = (item) => {
    if (item.selected !== false) {
      
      return (
        <div class="skill-subcat skill-subcat--item" key={item.id}>
         <div class="flexbox justify-space-between" key={item.id}>
            <div class="skill-block" key={item.id}>

            <div id={item.id} key={item.id} class="skill-block-title">{item.name}</div>

              <div class="skill-block-list" key={item.id}>
                <form key={item.id}>
                  {
                    item.skill_categories.map(this.skillBlockList)
                  }
                </form>
              </div>
          </div>

            <div class="skill-sub-block" key={item.id}>
              <div class="skill-block-title" key={item.id}>Skills</div>
              <div class="skill-tags-block clearfix" key={item.id}>
                {
                  item.skill_tags.map(this.skillsTagList)
                }
              </div>
            </div>

          </div>
          <div class="skill-block-footer" key={item.id}>
              <a href="#" id={item.id} onClick={this.onClickDeleteSkills}>Delete</a>
              <a href ="#" id={item.id} onClick={this.onClickEditSkill}>Edit</a>
           </div>
        </div> 
      );
    }
  }

  render() { 
    return (
      <div class="step-3">
          {
            this.props.skills.skillsdata.map(this.allSkills)
          }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        removeSkill,
        setActiveWin
      },
      dispatch
    );
   };
  
  function mapStateToProps (state) {
    return  {
      skills: state.skills
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SkillSubcat)