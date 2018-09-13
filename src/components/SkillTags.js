import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillSearchList from './SkillSearchList';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import axios from 'axios';
import {searchSkillTagWin, removeSkillTags} from './../reducers/userSkills';

class SkillTags extends React.Component {
  constructor(props){
    super(props);

    this.state = {searchModalWin: false,
                  tags:[]
    }
  }

  onClickRemoveTag = (event) => {
    Reactotron.log({"skill id":this.props.id,"tag id" : event.target.id})
    this.props.removeSkillTags(this.props.id, event.target.id);
  }

  skillTags = (item, index) => {
    return (
      <div class="skill-tag" id={index} onClick={this.onClickRemoveTag}>{item.name}</div>
    );
  }

  onChangeGetTag = (event) => {
      axios.get('/api/v1/profile/skills/search?q='+event.target.value)
      .then(response => {
        var size = Object.keys(response.data.skills).length;
        Reactotron.log("responce", size, response.data.skills);

        if (size > 0){
          this.setState({
            tags: response
          });
          this.props.searchSkillTagWin(true);
        }
      })
      .catch(error => {
        console.log('my errors' , error);
      })
      .then(function () {
      });
    // }
  }

  render() { 
    return (
      <div class="skill-sub-block">
      
        {this.props.skills.showSkillTagWin === true && <SkillSearchList data={this.state.tags.data.skills} skillid={this.props.id}/>}
        <form class="form-group">
          <input type="text" class="form-control" placeholder="Write new skill" onChange={this.onChangeGetTag}/>
          <button class="add-btn btn btn-blue">
            <span class="icon icon-add"></span>
          </button>
        </form>
        <div class="skill-tags-block clearfix">
          {
            this.props.skills.skillsdata[this.props.id].skill_tags.map(this.skillTags)
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
      removeSkillTags
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillTags);
