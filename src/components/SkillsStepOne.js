import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addSkill, setActiveWin, skillBackWindow} from './../reducers/userSkills';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepOne extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeID : null,
      menu : []
    }
  }

  onClickSetChecked = (event) => {
    this.props.addSkill(event.target.id);
    this.setState({activeID:event.target.id});
  }

  onClickSetSubCat = () => {
    if (this.state.activeID !== null) {
      this.props.setActiveWin("step-2-open", this.state.activeID);
      this.props.skillBackWindow("step-1-open");
    }

  }

   skillBlockList = (item ,index) => {
    return (
        <div id={item.id} class="checkbox-block" onClick={this.onClickSetChecked}>
          <input 
            id={item.id} 
            type="checkbox" 
            checked={item.selected}
          />

        <label id={item.id} for="cat-3">
          <span id={item.id} class="checkbox-circle">
            <span  id={item.id} class="icon icon-check-mark"></span>
          </span>
          <span id={item.id} class="checkbox-text">{item.name}</span>
        </label>
      </div>
    );
  }

  render() { 
    return (
      <div class="step-1">
        <div class="skill-block skill-cat">
          <div class="skill-block-title">Choose  Your Skill Category</div>
          <div class="skill-block-list">
            <form>
              { 
                this.props.skills.addCategories.map(this.skillBlockList)
              }
            </form>
          </div>
          <button type="button" class="btn btn-blue btn-bold" onClick={this.onClickSetSubCat}>Next</button>
        </div>
      </div>        
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addSkill,
      setActiveWin,
      skillBackWindow
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsStepOne);