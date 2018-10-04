import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
// import SkillBlock from './SkillBlock';
// import '../App.css';
// import '../../node_modules/toastr/build/toastr.css';
// import axios from 'axios';
import {searchSkillTagWin,addSkillTagsJobs} from './../../reducers/jobs';
import {skillConfig,activeSkillId,showSkillTagWin} from './../../selectors';

class SkillSearchList extends React.Component {
    constructor (props) {
      super(props);

      this.state = {text: ""}
    }

    onClickAddTag = (event) => {
      alert(event.target.id);
      this.props.addSkillTagsJobs(this.props.data[event.target.id].id, this.props.data[event.target.id].name);
      this.props.searchSkillTagWin(false);
      // this.props.setInputEmpty("");
    }
  
    render () {
      // Reactotron.log('oleg ',this.props.data);
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
        addSkillTagsJobs
        // addSkillTags,
        // setInputEmpty
      },
      dispatch
    );
   };
  
  function mapStateToProps (state) {
    return  {
      config:skillConfig(state),
      activeSkillId:activeSkillId(state),
      showSkillTagWin:showSkillTagWin(state)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SkillSearchList);