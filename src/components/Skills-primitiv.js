import React from 'react';
import {connect} from 'react-redux';
// import { render , component} from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import SkillsStepThree from './SkillsStepThree';
import SkillsStepOne from './SkillsStepOne';
import SkillsStepTwo from './SkillsStepTwo';
import {getToken} from './../functions/config';
import {getSkills} from '../reducers/userSkills'

class Skills extends React.Component {
constructor (props) {
  super(props);

  this.onClickGetState = this.onClickGetState.bind(this);
}

    getSkills = (value) => this.props.dispatch(getSkills(value));



  onClickGetState () {
    var obj = "Новые данные";
    this.getSkills(obj);
  }


  render() { 
    return (
    <div>
        Данные: {this.props.skills.skillsinfo}
        <button type="button" onClick={this.onClickGetState}>click</button>
    </div>   
    );
  }
}

function mapDispatchToProps(dispatch){
    return {
      getSkills : value => dispatch(getSkills(value))
    }
  }

export default connect(mapStateToProps)(Skills)