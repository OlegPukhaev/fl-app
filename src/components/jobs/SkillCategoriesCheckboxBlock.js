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
  constructor (props) {
    super(props);
  }


	render() {
    return (
      <div className="checkbox-block" key={this.props.key}>
        <input type="checkbox" id={this.props.id} checked={this.props.selected}/>
        <label for={this.props.id}>
          <span className="checkbox-circle">
            <span className="icon icon-check-mark"></span>
          </span>
          <span className="checkbox-text">{this.props.name}</span>
        </label>
      </div>      
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{

			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {

		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategoriesCheckboxBlock)