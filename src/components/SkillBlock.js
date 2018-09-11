import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';



class SkillBlock extends React.Component {
  constructor (props) {
    super(props);
  }

  onClickChecked = (event) => {
    alert(event.target.id);
  }

  getListSubCat = (item, index) => {
    return(
      <div class="checkbox-block" id={item.id}>
      <input type="checkbox" id={item.id} checked={item.selected} onClick={this.onClickChecked}/>
      <label for="biol-6">
        <span class="checkbox-circle">
          <span class="icon icon-check-mark"></span>
        </span>
        <span class="checkbox-text">{item.name}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillBlock);
