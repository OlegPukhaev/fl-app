import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import {checkSubcat} from './../reducers/userSkills';



class SkillBlock extends React.Component {
  constructor (props) {
    super(props);
  }

  onClickChecked = (event) => {
    // alert(event.target.id);
    this.props.checkSubcat( this.props.id, event.target.id)
  }

  getListSubCat = (item, index) => {
    return(
      <div class="checkbox-block" key={index} id={index}>
        <input type="checkbox" checked={item.selected}/>
        <label for="biol-6">
          <span class="checkbox-circle">
            <span class="icon icon-check-mark" key={index} id={index} onClick={this.onClickChecked}></span>
          </span>
          <span class="checkbox-text" key={index} id={index} onClick={this.onClickChecked}>{item.name}</span>
        </label>
      </div>
    );
  }

  render() { 
    return (
      <div class="skill-block">
        <div class="skill-block-title">{this.props.data.name}</div>

        <div class="skill-block-list">
          <form>

            {
              this.props.skills.skillsdata[this.props.id].skill_categories.map(this.getListSubCat)
            }

          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      checkSubcat
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillBlock);
