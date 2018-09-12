import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillBlock from './SkillBlock';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import axios from 'axios';

class SkillTags extends React.Component {
  constructor(props){
    super(props);
  }

  skillTags = (item, index) => {
    return (
      <div class="skill-tag" id={item.id}>{item.name}</div>
    );
  }

  onChangeGetTag = (event) => {
    
    // alert(event.target.value);
    axios.get('/api/v1/profile/skills/search?q='+event.target.value)
    .then(response => {
      // handle success
      console.log(' Hello ', response.data.user.full_name);
      // this.props.getUser(response.data);
    })
    .catch(error => {
      // handle error
      console.log('my errors' , error);
    })
    .then(function () {
      // always executed
    });
  }



  render() { 
    return (
      <div class="skill-sub-block">
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
      // removeSkill
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
