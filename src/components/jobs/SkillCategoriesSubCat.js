import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setSubCatChecked, searchSkillTagWin,setTagInput, removeSkillTagsJobs} from './../../reducers/jobs';
import {fetchSkillsCatJobPost} from './../../functions/api';
import {skillConfig,  activeSkillId, showSkillTagWin, tagInput} from './../../selectors';
import { fetchSkillTags } from './../../functions/api';
import SkillSearchList from './SkillSearchList';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class SkillCategoriesSubCat extends React.Component {
  constructor (props) {
    super(props);

    this.state = {tags:null}
  }

  selectSubCat = (event) => {
    this.props.setSubCatChecked(this.props.activeSkillId, event.target.id);
  }

  getSubCatList = (item, index) => {
    return (
      <div className="checkbox-block" key={`subcat-${index}`}>
        <input type="checkbox" id={item.id} checked={item.selected} onClick={this.selectSubCat}/>
        <label for={item.id}>
          <span className="checkbox-circle">
            <span className="icon icon-check-mark"></span>
          </span>
          <span className="checkbox-text">{item.name}</span>
        </label>
      </div>
    );
  }

  onChangeGetTag = (event) => {
  // this.props.setInputEmpty(event.target.value);
    this.props.setTagInput(event.target.value);
    fetchSkillTags(event.target.value).then(response => {
      this.setState({
          tags: response
        });
      this.props.searchSkillTagWin(true);
      }
    );
  }

  removeTag = (event) => {
    // alert(event.target.id);
    this.props.removeSkillTagsJobs(event.target.id);
  }

  tagList = (item, index) => {
    return (
      <div className="skill-tag" id={item.id} key={`tags-${index}`} onClick={this.removeTag}>{item.name}</div>
    );
  }

render() {
    return (
      <div className="skill-subcat">
        <div className="flexbox justify-space-between form-block-wrapper">
          <div className="skill-block">
          
            <div className="skill-block-title">
              {this.props.config.category[this.props.activeSkillId-1].name}
            </div>
            
            <div className="skill-block-list">
              <form>
                  {this.props.config.category[this.props.activeSkillId-1].skill_categories.map(this.getSubCatList)}
              </form>
            </div>
          </div>
          <div className="skill-sub-block">
          {(this.props.showSkillTagWin === true && this.state.tags.data.skills.length !== 0) && <SkillSearchList data={this.state.tags.data.skills} skillid={this.props.activeSkillId-1} value={this.props.tagInput}/>}
            <form className="form-group">
              <input type="text" className="form-control" placeholder="Write new skill" onChange={this.onChangeGetTag} value={this.props.tagInput}/>
              <button className="add-btn btn btn-blue">
                <span className="icon icon-add"></span>
              </button>
            </form>
            <div className="skill-tags-block clearfix">
              {this.props.config.skill_tags.length !== 0 && this.props.config.skill_tags.map(this.tagList)}
              
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
        setSubCatChecked,
        searchSkillTagWin,
        setTagInput,
        removeSkillTagsJobs
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
      config:skillConfig(state),
      activeSkillId:activeSkillId(state),
      showSkillTagWin:showSkillTagWin(state),
      tagInput:tagInput(state),
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategoriesSubCat)