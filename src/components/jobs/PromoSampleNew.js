import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectCreatePromo} from './../../reducers/jobs';
import {isDisabled, createIsChecked} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

class PromoSampleNew extends React.Component {

  inputTitle = () => {
    
  }

  inputDescription = () => {

  }

  selectCheckbox = () => {
    this.props.selectCreatePromo();
  }

	render() {
    return (
      <div className="radio-block">
        <div className="radio">
          <input type="radio" name="promo-sample" id="promo-cr" value="promo-cr" checked={this.props.createIsChecked} onClick={this.selectCheckbox} />
          <label for="promo-cr">
            <span className="checkbox-sqw">
              <span className="icon icon-check-mark"></span>
            </span>
            <span className="radio-text">Create Skill Test</span>
          </label>
        </div>
        <div className="post-job-inputs">
          <input type="text" placeholder="Job Title" className="job-title form-control" disabled={this.props.isDisabled}/>
          <textarea placeholder="Job Description" className="form-control job-descr" rows="4" disabled={this.props.isDisabled}></textarea>
        </div>
        <button className="btn btn-bold btn-blue">Create Promotion</button>
      </div>
    );
  }
}

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
        selectCreatePromo
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
      isDisabled:isDisabled(state),
      createIsChecked:createIsChecked(state),
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PromoSampleNew)