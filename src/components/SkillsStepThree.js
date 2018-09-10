import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { render , component} from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';


class SkillSubcat extends React.Component {
  constructor(props){
    super(props);
  }

  skillBlockList = (item, index) => {
    if (item.selected === true)
      return (
        <div class="checkbox-block" key={item.id}>
          <input type="checkbox" id="math-1" checked />
          <label for="math-1">
            <span class="checkbox-circle">
              <span class="icon icon-check-mark"></span>
            </span>
            <span class="checkbox-text">{item.name}</span>
          </label>
        </div>
      );
  }

  skillsTagList = (item, index) => {
    return (
      <div class="skill-tag" key={item.id}>{item.name}</div>
    );  
  }

  allSkills = (item, index) => {
    if (item.selected !== false) {
      
      return (
        <div class="skill-subcat skill-subcat--item">
         <div class="flexbox justify-space-between">
            <div class="skill-block">

            <div id={item.id} key={index} class="skill-block-title">{item.name}</div>

              <div class="skill-block-list">
                <form>
                  {
                    item.skill_categories.map(this.skillBlockList)
                  }
                </form>
              </div>
          </div>

            <div class="skill-sub-block">
              <div class="skill-block-title">Skills</div>
              <div class="skill-tags-block clearfix">
                {
                  item.skill_tags.map(this.skillsTagList)
                }
              </div>
            </div>

          </div>
          <div class="skill-block-footer">
              <a href="#">View More</a>
              <a href="#">Edit</a>
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

export default SkillsStepThree;