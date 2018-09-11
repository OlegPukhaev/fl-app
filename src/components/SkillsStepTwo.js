import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillBlock from './SkillBlock';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepTwo extends React.Component {
  render() { 
    return (
      <div class="step-2">
        <div class="skill-subcat">
            <div class="flexbox justify-space-between">
               
              <SkillBlock />
                 {/* <div class="skill-block">
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
                </div> */}


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
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsStepTwo);
