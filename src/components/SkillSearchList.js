import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillBlock from './SkillBlock';
// import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import axios from 'axios';
import {searchSkillTagWin, addSkillTags, setInputEmpty} from './../reducers/userSkills';

class SkillSearchList extends React.Component {
    constructor (props) {
      super(props);
    }

    onClickAddTag = (event) => {
      this.props.addSkillTags(this.props.skillid, this.props.data[event.target.id].id, this.props.data[event.target.id].name);
      this.props.searchSkillTagWin(false);
      this.props.setInputEmpty("");
    }
  
    render () {
      Reactotron.log('oleg ',this.props.data);
      return (
        <div class="modal-tag-win">
          <ul>
            {
              this.props.data.map((item, index) => {
                return <li id={index} onClick={this.onClickAddTag}>{item.name}</li>
              })
            }
          </ul>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        searchSkillTagWin,
        addSkillTags,
        setInputEmpty
      },
      dispatch
    );
   };
  
  function mapStateToProps (state) {
    return  {
      skills: state.skills
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SkillSearchList);