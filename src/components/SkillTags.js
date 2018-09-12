import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillBlock from './SkillBlock';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillTags extends React.Component {
  constructor(props){
    super(props);
  }
  render() { 
    return (
      <div class="skill-sub-block">
        <form class="form-group">
          <input type="text" class="form-control" placeholder="Write new skill" />
          <button class="add-btn btn btn-blue">
            <span class="icon icon-add"></span>
          </button>
        </form>
        <div class="skill-tags-block clearfix">
          <div class="skill-tag">Math</div>
          <div class="skill-tag">Trigonometry</div>
          <div class="skill-tag">Calculus</div>
          <div class="skill-tag">Trigonometry</div>
          <div class="skill-tag">Calculus</div>
          <div class="skill-tag">Trigonometry</div>
          <div class="skill-tag">Calculus</div>
          <div class="skill-tag">Math</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillTags);
