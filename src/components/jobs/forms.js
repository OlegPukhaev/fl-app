import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, getSkillCategories, getDefautlPromotions} from './../../reducers/jobs';
import {fetchSkillsCatJobPost,fetchDefaultPromotions} from './../../functions/api';

import {modalWinToggler,skillConfig,activeSkillId} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';
import TitleDescription from './TitleDescription';
import SkillCategories from './SkillCategories';
import PromoSample from './PromoSample';
import PaymentDetails from './PaymentDetails';
import PostButton from './PostButton';
import axios from 'axios';

class Forms extends React.Component {

	closeWin = () => {
		this.props.winToggler(false);
	}

	async componentDidMount() {

		fetchSkillsCatJobPost().then(response => {
			if (response !== "error") {
				this.props.getSkillCategories(response.data.profession_categories);
			} 
		});

		// fetchDefaultPromotions().then(response => {
		// 	if (response !== "error") {
		// 		console.log(response.data);
		// 		this.props.getDefautlPromotions(response.data);
		// 	} 
		// });
	}
	
	render() {
		Reactotron.log({activeSkillId: this.props.activeSkillId},{promoId: this.props.promoId},{config:this.props.config});
      return (
        <div className="content post-job-content" className={this.props.modalWinToggler}>
					<div className="post-job-form panel panel-default">
					<div className="post-job-title blue-color" onClick={this.closeWin}>Post a Job </div>
						<TitleDescription />
						{/* {alert(this.props.config.promotion.category[0].name)} */}
							{this.props.config.category !== null && <SkillCategories />}
							<PromoSample data={this.props.config.promotion}/>
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
				getSkillCategories,
				getDefautlPromotions
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			modalWinToggler:modalWinToggler(state),
			config:skillConfig(state),
			activeSkillId:activeSkillId(state),
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(Forms)