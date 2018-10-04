import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, getSkillCategories} from './../../reducers/jobs';
import {fetchSkillsCatJobPost} from './../../functions/api';
import {modalWinToggler, skillsCategory} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';
import SkillCategoriesCheckboxBlock from './SkillCategoriesCheckboxBlock';

const queryString = require('query-string');

class SkillCategories extends React.Component {

getSkillList = (item, index) => {
  return <SkillCategoriesCheckboxBlock 
    key={index} 
    id={item.id}
    name={item.name}
    selected={item.selected}
  />;
}

	render() {
		Reactotron.log(
      {SkillCategories:this.props.skillsCategory},
      {SkillCategories:this.props.skillsCategory.length}
    );
    return (
      <div className="form-block">
        <div className="skill-block skill-cat">

          <div className="skill-block-title">
            <div className="form-block-wrapper">
              Choose  Your Skill Category
              <span className="icon icon-down-arrow"></span>
            </div>
          </div>
          
          <div className="skill-block-list">
            <form className="form-block-wrapper flexbox flex-wrap">
              {/* {this.props.skillsCategory.length >> 0 && this.getSkillList()} */}
              {this.props.skillsCategory.map(this.getSkillList)}
              {/* {this.getSkillList()} */}
            </form>
          </div>
        </div>
        <div className="skill-subcat">
          <div className="flexbox justify-space-between form-block-wrapper">
            <div className="skill-block">
              <div className="skill-block-title">Math &amp; Science</div>
              <div className="skill-block-list">
                <form>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-1" />
                    <label for="math-1">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-2" />
                    <label for="math-2">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-3" />
                    <label for="math-3">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-4" />
                    <label for="math-4">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-5" />
                    <label for="math-5">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-6" />
                    <label for="math-6">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-7" />
                    <label for="math-7">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-8" />
                    <label for="math-8">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-9" />
                    <label for="math-9">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-10" />
                    <label for="math-10">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="skill-sub-block">
              <form className="form-group">
                <input type="text" className="form-control" placeholder="Write new skill" />
                <button className="add-btn btn btn-blue">
                  <span className="icon icon-add"></span>
                </button>
              </form>
              <div className="skill-tags-block clearfix">
                <div className="skill-tag">Math</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Math</div>
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
        winToggler,
        fetchSkillsCatJobPost,
        getSkillCategories
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
      modalWinToggler:modalWinToggler(state),
      skillsCategory:skillsCategory(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategories)