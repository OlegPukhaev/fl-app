import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addSkill, setActiveWin, skillBackWindow, getMenuSkills} from './../reducers/userSkills';
import {addCategories} from './../selectors';
import '../../node_modules/toastr/build/toastr.css';
var toastr = require('../../node_modules/toastr/toastr');

class SkillsStepOne extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      prevActivID : null,
      activeID : null,
       selectedID : []
    }
  }

  onClickSetChecked = (event) => {
    var selectedCopy = Object.assign({}, this.state.selectedID);
    selectedCopy[event.target.id-1].selected = true;
    if(this.state.prevActivID != null) selectedCopy[this.state.prevActivID].selected = false;
    this.setState({
      selectedID:selectedCopy,
      prevActivID:event.target.id-1,
      activeID: event.target.id
    });
  }

  onClickSetSubCat = () => {
    if (this.state.activeID !== null) {
      this.props.setActiveWin("step-2-open", this.state.activeID);
      this.props.skillBackWindow("step-1-open");
    } else {
      toastr.warning('Please select categories from list')
    }
  }

   skillBlockList = (item, index) => {
    return (
        <div id={item.id} class="checkbox-block" onClick={this.onClickSetChecked}>
          <input 
            name={"check"+item.id}
            id={item.id} 
            type = "checkbox" 
            checked = {this.state.selectedID[index].selected}
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

  componentWillMount = () => {
    var obj = [];
    this.props.addCategories.map(item => {
      obj.push({"selected":false});
    });
    this.setState({selectedID:obj});
  }

  render() { 
    Reactotron.log(this.props.addCategories);
    return (
      <div class="step-1">
        <div class="skill-block skill-cat">
          <div class="skill-block-title">Choose  Your Skill Category</div>
          <div class="skill-block-list">
            <form>
              { 
                this.props.addCategories.map(this.skillBlockList)
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
      skillBackWindow,
      getMenuSkills
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    // skills: state.skills,
    addCategories:addCategories(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsStepOne);