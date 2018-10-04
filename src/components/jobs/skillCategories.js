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
import SkillCategoriesSubCat from './SkillCategoriesSubCat';

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
              {this.props.skillsCategory.map(this.getSkillList)}
            </form>
          </div>
        </div>
      
        {this.props.isSkillSelected === true && <SkillCategoriesSubCat />}




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