import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from './../selectors';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');
// import queryString fro

class Tellent extends React.Component {
    render() {
      return (
        <div class="content post-job-content">
				<div class="post-job-title blue-color">Post a Job</div>
				<div class="post-job-form panel panel-default">
					<div class="form-block">
						<div class="post-job-inputs form-block-wrapper">
							<input type="text" placeholder="Job Title" class="job-title form-control" />
							<textarea placeholder="Job Description" class="form-control job-descr" rows="4"></textarea>
						</div>
					</div>
					<div class="form-block">
						<div class="skill-block skill-cat">
							<div class="skill-block-title">
								<div class="form-block-wrapper">
									Choose  Your Skill Category
									<span class="icon icon-down-arrow"></span>
								</div>
							</div>
							<div class="skill-block-list">
								<form class="form-block-wrapper flexbox flex-wrap">
									<div class="checkbox-block">
										<input type="checkbox" id="cat-1">
										<label for="cat-1">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Web, Mobile &amp; Software Dev</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-2">
										<label for="cat-2">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">IT &amp; Networking</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-3">
										<label for="cat-3">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Data Science &amp; Analytics</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-4">
										<label for="cat-4">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Translation</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-5">
										<label for="cat-5">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Legal</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-6">
										<label for="cat-6">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Admin Support</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-7">
										<label for="cat-7">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Engineering &amp; Architecture</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-8">
										<label for="cat-8">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Customer Service</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-9">
										<label for="cat-9">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Design &amp; Creative</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-10">
										<label for="cat-10">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Sales &amp; Marketing</span>
										</label>
									</div>
								</form>
							</div>
						</div>
						<div class="skill-subcat">
							<div class="flexbox justify-space-between form-block-wrapper">
								<div class="skill-block">
									<div class="skill-block-title">Math &amp; Science</div>
									<div class="skill-block-list">
										<form>
											<div class="checkbox-block">
												<input type="checkbox" id="math-1">
												<label for="math-1">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-2">
												<label for="math-2">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-3">
												<label for="math-3">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-4">
												<label for="math-4">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-5">
												<label for="math-5">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-6">
												<label for="math-6">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-7">
												<label for="math-7">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-8">
												<label for="math-8">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-9">
												<label for="math-9">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-10">
												<label for="math-10">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
										</form>
									</div>
								</div>
								<div class="skill-sub-block">
									<form class="form-group">
										<input type="text" class="form-control" placeholder="Write new skill">
										<button class="add-btn btn btn-blue">
											<span class="icon icon-add"></span>
										</button>
									</form>
									<div class="skill-tags-block clearfix">
										<div class="skill-tag">Math</div>
										<div class="skill-tag">Trigonometry</div>
										<div class="skill-tag">Calculus</div>
										<div class="skill-tag">Trigonometry</div>
										<div class="skill-tag">Calculus</div>
										<div class="skill-tag">Trigonometry</div>
										<div class="skill-tag">Calculus</div>
										<div class="skill-tag">Math</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="form-block">
						<div class="form-block-wrapper promo-sample-block">
							<div class="radio-block">
								<div class="radio">
									<input type="radio" name="promo-sample" id="promo-cr" value="promo-cr" checked="checked">
									<label for="promo-cr">
										<span class="checkbox-sqw">
											<span class="icon icon-check-mark"></span>
										</span>
										<span class="radio-text">Create Sample</span>
									</label>
								</div>
								<div class="post-job-inputs">
									<input type="text" placeholder="Job Title" class="job-title form-control">
									<textarea placeholder="Job Description" class="form-control job-descr" rows="4"></textarea>
								</div>
								<button class="btn btn-bold btn-blue">Create Promotion</button>
							</div>
							<div class="radio-block">
								<div class="radio">
									<input type="radio" name="promo-sample" id="promo-ch" value="promo-ch" checked="checked">
									<label for="promo-ch">
										<span class="checkbox-sqw">
											<span class="icon icon-check-mark"></span>
										</span>
										<span class="radio-text">Or Chouse Sample</span>
									</label>
								</div>
								<div class="promo-block-form">
									<div class="promo-block-form-header flexbox justify-space-between">
										<div class="filter-nav flexbox justify-space-between">
											<div class="my-select-box form-control">
												<span class="my-select-result flexbox justify-space-between">
													<span class="text">Category</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
														<div class="radio">
															<input type="radio" name="numb-options" id="1-term" value="1-term" checked="">
															<label for="1-term">
																<span class="radio-text">1</span>
															</label>
														</div>
														<div class="radio">
															<input type="radio" name="numb-options" id="2-term" value="2-term" checked="">
															<label for="2-term">
																<span class="radio-text">2</span>
															</label>
														</div>
													</div>	
												</div>
											</div>
											<div class="my-select-box form-control">
												<span class="my-select-result flexbox justify-space-between">
													<span class="text">Sub Category</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
														<div class="radio">
															<input type="radio" name="numb-options" id="1-term" value="1-term" checked="">
															<label for="1-term">
																<span class="radio-text">1</span>
															</label> 
														</div>
														<div class="radio">
															<input type="radio" name="numb-options" id="2-term" value="2-term" checked="">
															<label for="2-term">
																<span class="radio-text">2</span>
															</label>
														</div>
													</div>	
												</div>
											</div>
										</div>
										<div class="results-numb">
											<span class="numb">12</span> results
										</div>
									</div>
									<div class="promo-block-form-body">
										<div class="checkbox-block">
											<input type="checkbox" id="skill-test-1">
											<label for="skill-test-1">
												<div class="panel-block flexbox">
													<span class="checkbox-circle checkbox-sqw">
														<span class="icon icon-check-mark"></span>
													</span>
													<div class="panel-wrapper">
														<div class="panel panel-blue">
															<div class="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span class="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
										<div class="checkbox-block">
											<input type="checkbox" id="skill-test-2">
											<label for="skill-test-2">
												<div class="panel-block flexbox">
													<span class="checkbox-circle checkbox-sqw">
														<span class="icon icon-check-mark"></span>
													</span>
													<div class="panel-wrapper">
														<div class="panel panel-orange">
															<div class="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span class="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
										<div class="checkbox-block">
											<input type="checkbox" id="skill-test-3">
											<label for="skill-test-3">
												<div class="panel-block flexbox">
													<span class="checkbox-circle checkbox-sqw">
														<span class="icon icon-check-mark"></span>
													</span>
													<div class="panel-wrapper">
														<div class="panel panel-pink">
															<div class="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span class="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
									</div>
								</div>
								<button class="btn btn-bold btn-blue">Add Promotion</button>
							</div>
						</div>
					</div>
					<div class="form-block">
						<div class="form-block-wrapper flexbox justify-space-between">
							<div class="form-block-section">
								<div class="form-block-header">
									<div class="form-block-title">
										Job Payment
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="job-payment" id="fixed-payment" value="fixed-payment" checked="">
										<label for="fixed-payment">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Fixed Price</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="job-payment" id="hourly-payment" value="hourly-payment">
										<label for="hourly-payment">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Hourly</span>
											<span class="job-payment-input-wrapper">
												<input type="text" value="20" class="form-control">
												$ / hour
											</span>
										</label>
									</div>
								</div>
							</div>
							<div class="form-block-section">
								<div class="form-block-header">
									<div class="form-block-title">
										Job Price
									</div>
								</div>
								<div class="job-price-input-wrapper">
									<input class="form-control" type="text" value="500"> $
									<p class="small">Enter here how much you think it should cost you..</p>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper">
							<div class="form-block-section job-time-block col-100">
								<div class="form-block-header">
									<div class="form-block-title">
										Estimated time to complete the Job
									</div>
								</div>
								<div class="btn-group">
									<button class="btn btn-bg-transparent">
										<div class="my-select-box">
												<span class="my-select-result">
													<span class="text">3</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
													<div class="radio">
														<input type="radio" name="numb-options" id="1-term" value="1-term" checked="">
														<label for="1-term">
															<span class="radio-text">1</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="2-term" value="2-term" checked="">
														<label for="2-term">
															<span class="radio-text">2</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="3-term" value="3-term" checked="">
														<label for="3-term">
															<span class="radio-text">3</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="4-term" value="4-term" checked="">
														<label for="4-term">
															<span class="radio-text">4</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="5-term" value="5-term" checked="">
														<label for="5-term">
															<span class="radio-text">5</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="6-term" value="6-term" checked="">
														<label for="6-term">
															<span class="radio-text">6</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="7-term" value="7-term" checked="">
														<label for="7-term">
															<span class="radio-text">7</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="8-term" value="8-term" checked="">
														<label for="8-term">
															<span class="radio-text">8</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="9-term" value="9-term" checked="">
														<label for="9-term">
															<span class="radio-text">9</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="10-term" value="10-term">
														<label for="10-term">
															<span class="radio-text">10</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="11-term" value="11-term">
														<label for="11-term">
															<span class="radio-text"> 11</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="12-term" value="12-term">
														<label for="12-term">
															<span class="radio-text">12</span>
														</label>
													</div>
												</div>	
												</div>
											</div>
										</button>
									<button class="btn btn-bg-transparent">
										<div class="my-select-box">
												<span class="my-select-result">
													<span class="text">Week</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
													<div class="radio">
														<input type="radio" name="period-options" id="d-term" value="d-term" checked="">
														<label for="d-term">
															<span class="radio-text">Day</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="period-options" id="w-term" value="w-term">
														<label for="w-term">
															<span class="radio-text">Week</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="period-options" id="m-term" value="m-term">
														<label for="m-term">
															<span class="radio-text"> Month</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="period-options" id="y-term" value="y-term">
														<label for="y-term">
															<span class="radio-text">Year</span>
														</label>
													</div>
												</div>	
												</div>
										</div>
									</button>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper flexbox justify-space-between">
							<div class="form-block-section col-30">
								<div class="form-block-header">
									<div class="form-block-title">
										Talent Commitment
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="commitment-option" id="later" value="later" checked="">
										<label for="later">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">I will Decide Later</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="commitment-option" id="10hrs" value="10hrs">
										<label for="10hrs">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">10 hrs per week</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="commitment-option" id="30hrs" value="30hrs">
										<label for="30hrs">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Up to 30 hrs per week</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="commitment-option" id="30morehrs" value="30morehrs">
										<label for="30morehrs">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">More than 30 hrs per week</span>
										</label>
									</div>
								</div>
							</div>
							<div class="form-block-section">
								<div class="form-block-header">
									<div class="form-block-title">
										Talent Level
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-int" value="level-int" checked="">
										<label for="level-int">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Intern</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-jun" value="level-jun">
										<label for="level-jun">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Junior</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-sen" value="level-sen">
										<label for="level-sen">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Senior</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-exp" value="level-exp">
										<label for="level-exp">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Expert</span>
										</label>
									</div>
								</div>
							</div>
							<div class="form-block-section col-30">
								<div class="form-block-header">
									<div class="form-block-title">
										How Many Talents Do you want to try
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-1" value="quantity-1" checked="">
										<label for="quantity-1">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">1</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-3" value="quantity-3">
										<label for="quantity-3">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">3</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-5" value="quantity-5">
										<label for="quantity-5">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">5</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-infinity" value="quantity-infinity">
										<label for="quantity-infinity">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">As many as will be</span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper">
							<div class="form-block-section col-100">
								<div class="form-block-header">
									<div class="form-block-title">
										Contract General Notes
									</div>
								</div>
								<div>
									<textarea class="form-control comments-area" placeholder="Enter here Comments for the contract"></textarea>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper">
							<div class="form-block-section finish-block col-100">
								<div class="form-block-header">
									<div class="form-block-title">
										Finish
									</div>
								</div>
								<div class="checkbox-block">
									<input type="checkbox" id="terms-agree">
									<label for="terms-agree">
										<span class="checkbox-circle">
											<span class="icon icon-check-mark"></span>
										</span>
										<span class="checkbox-text">I agree for the terms of use</span>
									</label>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper btn-block">
							<button class="btn btn-blue btn-bold">Preview Before Posting</button>
							<button class="btn btn-blue btn-bold">Continue</button>
						</div>
					</div>
				</div>
			</div> <!--content End-->
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{

			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {

		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(Tellent)