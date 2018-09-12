import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillBlock from './SkillBlock';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import axios from 'axios';
import {searchSkillTagWin} from './../reducers/userSkills';

class SkillSearchList extends React.Component {
    constructor (props) {
      super(props);
    }
  
    onClickAddTag = (event) => {
      alert(event.target.id);
      this.props.searchSkillTagWin(false);
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

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        searchSkillTagWin
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