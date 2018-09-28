import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillSearchList from './SkillSearchList';
// import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
// import axios from 'axios';
import {searchSkillTagWin, removeSkillTags, setInputEmpty} from './../reducers/userSkills';
import { fetchSkillTags } from '../functions/api';
import {getShowSkillTagWin, getAllSkillData, emptyInput} from './../selectors';

class SkillTags extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchModalWin: false,
      tags:[]
    }
  }

  onClickRemoveTag = (event) => {
    this.props.removeSkillTags(this.props.id, event.target.id);
  }

  skillTags = (item, index) => {
    return (
      <div class="skill-tag" id={index} onClick={this.onClickRemoveTag}>{item.name}</div>
    );
  }

  onChangeGetTag = (event) => {
    this.props.setInputEmpty(event.target.value);
      fetchSkillTags(event.target.value).then(response => {
        this.setState({
            tags: response
          });
        this.props.searchSkillTagWin(true);
        }
      );
  }

  render() { 
    Reactotron.log(this.state.tags);
    return (
      <div class="skill-sub-block">
      
        {this.props.showSkillTagWin === true && <SkillSearchList data={this.state.tags.data.skills} skillid={this.props.id}/>}
        <form class="form-group">
          <input type="text" class="form-control" placeholder="Write new skill" onChange={this.onChangeGetTag} value={this.props.emptyInput}/>
          <button class="add-btn btn btn-blue">
            <span class="icon icon-add"></span>
          </button>
        </form>
        <div class="skill-tags-block clearfix">
          {
            this.props.skillsdata[this.props.id].skill_tags.map(this.skillTags)
            // this.props.skills.skillsdata[this.props.id].skill_tags.map(this.skillTags)
          }
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchSkillTagWin,
      removeSkillTags,
      setInputEmpty
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    skills: state.skills,
    showSkillTagWin: getShowSkillTagWin(state),
    skillsdata: getAllSkillData(state),
    emptyInput: emptyInput(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillTags);
