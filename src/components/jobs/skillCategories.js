import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, getSkillCategories,setSkillChecked} from './../../reducers/jobs';
import {fetchSkillsCatJobPost} from './../../functions/api';
import {modalWinToggler, skillConfig, isSkillSelected} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';
import SkillCategoriesCheckboxBlock from './SkillCategoriesCheckboxBlock';
import SkillCategoriesSubCat from './SkillCategoriesSubCat';

const queryString = require('query-string');

class SkillCategories extends React.Component {

getSkillList = (item, index) => {
  return (
    <div className="checkbox-block" key={index}>
      <input type="checkbox" id={item.id} checked={item.selected} onClick={this.selectSkill}/>
      <label for={item.id}>
        <span className="checkbox-circle">
          <span className="icon icon-check-mark"></span>
        </span>
        <span className="checkbox-text">{item.name}</span>
      </label>
    </div>   
  );
}
// getSkillList = (item, index) => {
//   return <SkillCategoriesCheckboxBlock 
//     key={index} 
//     id={item.id}
//     name={item.name}
//     selected={item.selected}
//   />;
// }

selectSkill = (event) => {
  this.props.setSkillChecked(event.target.id);  
  // alert(event.target.id);
}

	render() {
		Reactotron.log(
      this.props.config
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
              {this.props.config.category.map(this.getSkillList)}
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
        getSkillCategories,
        setSkillChecked
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
      modalWinToggler:modalWinToggler(state),
      config:skillConfig(state),
      isSkillSelected:isSkillSelected(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategories)