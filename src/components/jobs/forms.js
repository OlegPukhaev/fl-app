import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';
import TitleDescription from './TitleDescription';
import SkillCategories from './SkillCategories';
import PromoSample from './PromoSample';
import PaymentDetails from './PaymentDetails';
import PostButton from './PostButton';

const queryString = require('query-string');
// import queryString fro

class Forms extends React.Component {

	closeWin = () => {
		this.props.winToggler(false);
	}
	
	render() {
		// Reactotron.log(this.props.modalWinToggler);
      return (
        <div className="content post-job-content" className={this.props.modalWinToggler}>
					<div className="post-job-form panel panel-default">
					<div className="post-job-title blue-color" onClick={this.closeWin}>Post a Job </div>
						<TitleDescription />
						<SkillCategories />
						<PromoSample />
						<PaymentDetails />
						<PostButton />
					</div>
				</div>//  content End
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
				winToggler
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			modalWinToggler:modalWinToggler(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(Forms)