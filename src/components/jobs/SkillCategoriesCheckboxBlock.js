import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, getSkillCategories} from './../../reducers/jobs';
import {fetchSkillsCatJobPost} from './../../functions/api';
import {modalWinToggler, skillsCategory} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class SkillCategoriesCheckboxBlock extends React.Component {

	render() {
    return (
      <div className="checkbox-block">
        <input type="checkbox" id="cat-1" />
        <label for="cat-1">
          <span className="checkbox-circle">
            <span className="icon icon-check-mark"></span>
          </span>
          <span className="checkbox-text">Web, Mobile &amp; Software Dev</span>
        </label>
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
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategoriesCheckboxBlock)