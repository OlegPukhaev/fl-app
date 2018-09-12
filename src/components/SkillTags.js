import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillBlock from './SkillBlock';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import axios from 'axios';


class SearchWin extends React.Component {
  constructor (props) {
    super(props);
  }

  onClickAddTag = (event) => {
    alert(event.target.id);
  }

  render () {
    Reactotron.log('oleg ',this.props.data);
    return (
      <div class="modal-tag-win">
        <ul>
          {
            this.props.data.map((item) => {
              return <li id={item.id} onClick={this.onClickAddTag}>{item.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

class SkillTags extends React.Component {
  constructor(props){
    super(props);

    this.state = {searchModalWin: false,
                  tags:[]
    }
  }

  skillTags = (item, index) => {
    return (
      <div class="skill-tag" id={item.id}>{item.name}</div>
    );
  }

  onChangeGetTag = (event) => {
    axios.get('/api/v1/profile/skills/search?q='+event.target.value)
    .then(response => {
      this.setState({
        tags: response,
        searchModalWin: true
      });
      Reactotron.log(this.state.tags, this.state.searchModalWin);
    })
    .catch(error => {
      console.log('my errors' , error);
    })
    .then(function () {
    });
  }

  render() { 
    return (
      <div class="skill-sub-block">
        {this.state.searchModalWin === true && <SearchWin data={this.state.tags.data.skills}/>}
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
        {/* <SearchWin data={this.state.tags.data.skills}/> */}
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
