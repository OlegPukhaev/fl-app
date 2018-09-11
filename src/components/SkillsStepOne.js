import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepOne extends React.Component {
  constructor () {
    super();
  }

  skillBlockList = (item) => {
    return (
      <div class="checkbox-block" key={'block'+item.key}>
        <input id={item.id} key={'input'+item.key} type="checkbox" />
        <label for="cat-3">
          <span class="checkbox-circle">
            <span class="icon icon-check-mark"></span>
          </span>
          <span class="checkbox-text">{item.name}</span>
        </label>
      </div>
    );
  }

  render() { 
    return (
      <div class="step-1">
        <div class="skill-block skill-cat">
          <div class="skill-block-title">Choose  Your Skill Category</div>
          <div class="skill-block-list">
            <form>

              { 
                this.props.skills.skillsdata.map(this.skillBlockList)
              }

            </form>
          </div>
          <button type="button" class="btn btn-blue btn-bold step-2-toggler step-toggler">Next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsStepOne);