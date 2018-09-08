import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import {getToken} from './../functions/config';
import { bindActionCreators } from 'redux';
import {CONFIG} from '../functions/api';
import '../../node_modules/toastr/build/toastr.css';
import {getSkills} from '../reducers/userSkills';
import axios from 'axios';



class Test extends React.Component {
  constructor () {
    super();

    // this.allSkills = this.allSkills.bind(this);
  }


  componentWillMount = () => {
  axios.get('/api/v1/profile/skills/user')
  .then(response => {
    // console.log("Component Will mounth ", response);
    // Reactotron.log(response)
    this.props.getSkills(response.data.profession_categories);
  })
  .catch(function (error) {
    console.log('my errors' , error);
    return false;
  }); 
};

  allSkills = (item, index) => {
    if (item.selected !== false) {
      return <li id={item.id} key={index}>{item.name}</li>
    }
  };

 
  render() {
    return (
      <div>
          Данные тут:
          {Reactotron.log(this.props.skills)}
          <ul>
            {
              this.props.skills.skillsdata.map(this.allSkills)
            }
          </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSkills
    },
    dispatch
  );
 };

function mapStateToProps (state){
  return {
      skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
