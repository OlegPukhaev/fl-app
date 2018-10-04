import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, getSkillCategories} from './../../reducers/jobs';
import {fetchSkillsCatJobPost} from './../../functions/api';

import {modalWinToggler,skillConfig} from './../../selectors';
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

	componentWillMount() {
		fetchSkillsCatJobPost().then(response => {
			if (response !== "error") {
				this.props.getSkillCategories(response.data.profession_categories);
			} 
		})  
	}
	
	render() {
		Reactotron.log(this.props.config);
      return (
        <div className="content post-job-content" className={this.props.modalWinToggler}>
					<div className="post-job-form panel panel-default">
					<div className="post-job-title blue-color" onClick={this.closeWin}>Post a Job </div>
						<TitleDescription />
						{this.props.config.category !== null && <SkillCategories />}
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
				winToggler,
				getSkillCategories
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			modalWinToggler:modalWinToggler(state),
			config:skillConfig(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(Forms)