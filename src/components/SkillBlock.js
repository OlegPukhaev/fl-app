import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillBlock extends React.Component {
  render() { 
    return (
      <div class="skill-block">
        <div class="skill-block-title">Biology</div>
        <div class="skill-block-list">
          <form>
            <div class="checkbox-block">
              <input type="checkbox" id="biol-6" />
              <label for="biol-6">
                <span class="checkbox-circle">
                  <span class="icon icon-check-mark"></span>
                </span>
                <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
              </label>
            </div>
            <div class="checkbox-block">
              <input type="checkbox" id="biol-7" />
              <label for="biol-7">
                <span class="checkbox-circle">
                  <span class="icon icon-check-mark"></span>
                </span>
                <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
              </label>
            </div>
          </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillBlock);
