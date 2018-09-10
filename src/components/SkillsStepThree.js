import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeSkill} from './../reducers/userSkills';
import SkillSubcat from './SkillSubcat';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepThree extends React.Component {
	constructor (props) {
		super(props);
        
	}

  render() { 
      return (
          <div class="step-3">
          {Reactotron.log(this.props.skills)}

                <SkillSubcat skills={this.props.skills}/>

            <div class="skill-subcat skill-subcat--new">
                <div class="skill-block-title">New Skill Category</div>
                <div class="flexbox justify-space-between">
                    <div class="skill-block">
                        <form>
                            <div class="input-block">
                                Category
                                <input type="text" placeholder="Insert your new category here.." />
                            </div>
                        </form>
                    </div>
                    <div class="skill-block">
                        <form>
                            <div class="input-block">
                                Subcategory
                                <input type="text" placeholder="Insert your new subcategory here.." />
                            </div>
                        </form>
                    </div>
                    <div class="skill-sub-block">
                        <div class="skill-block-title">Skills</div>
                        <form class="form-group">
                            <input type="text" class="form-control" placeholder="Write new skill" />
                            <button class="add-btn btn btn-blue">
                                <span class="icon icon-add"></span>
                            </button>
                        </form>
                        <div class="skill-tags-block clearfix">
                            <div class="skill-tag">Math</div>
                            <div class="skill-tag">Trigonometry</div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-blue add-skill-btn">Add Skill Category</button>
            </div>

    </div>  
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeSkill
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsStepThree)