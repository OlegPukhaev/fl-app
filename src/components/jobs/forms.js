import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');
// import queryString fro

class Tellent extends React.Component {

	closeWin = () => {
		this.props.winToggler(false);
	}
	
	render() {
		Reactotron.log(this.props.modalWinToggler);
      return (
        <div className="content post-job-content" className={this.props.modalWinToggler}>
				<div className="post-job-form panel panel-default">
				<div className="post-job-title blue-color" onClick={this.closeWin}>Post a Job </div>
					<div className="form-block">
						<div className="post-job-inputs form-block-wrapper">
							<input type="text" placeholder="Job Title" className="job-title form-control" />
							<textarea placeholder="Job Description" className="form-control job-descr" rows="4"></textarea>
						</div>
					</div>
					<div className="form-block">
						<div className="skill-block skill-cat">
							<div className="skill-block-title">
								<div className="form-block-wrapper">
									Choose  Your Skill Category
									<span className="icon icon-down-arrow"></span>
								</div>
							</div>
							<div className="skill-block-list">
								<form className="form-block-wrapper flexbox flex-wrap">
									<div className="checkbox-block">
										<input type="checkbox" id="cat-1" />
										<label for="cat-1">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Web, Mobile &amp; Software Dev</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-2" />
										<label for="cat-2">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">IT &amp; Networking</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-3" />
										<label for="cat-3">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Data Science &amp; Analytics</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-4" />
										<label for="cat-4">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Translation</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-5" />
										<label for="cat-5">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Legal</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-6" />
										<label for="cat-6">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Admin Support</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-7" />
										<label for="cat-7">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Engineering &amp; Architecture</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-8" />
										<label for="cat-8">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Customer Service</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-9" />
										<label for="cat-9">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Design &amp; Creative</span>
										</label>
									</div>
									<div className="checkbox-block">
										<input type="checkbox" id="cat-10" />
										<label for="cat-10">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="checkbox-text">Sales &amp; Marketing</span>
										</label>
									</div>
								</form>
							</div>
						</div>
						<div className="skill-subcat">
							<div className="flexbox justify-space-between form-block-wrapper">
								<div className="skill-block">
									<div className="skill-block-title">Math &amp; Science</div>
									<div className="skill-block-list">
										<form>
											<div className="checkbox-block">
												<input type="checkbox" id="math-1" />
												<label for="math-1">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-2" />
												<label for="math-2">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-3" />
												<label for="math-3">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-4" />
												<label for="math-4">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-5" />
												<label for="math-5">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-6" />
												<label for="math-6">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-7" />
												<label for="math-7">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-8" />
												<label for="math-8">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-9" />
												<label for="math-9">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div className="checkbox-block">
												<input type="checkbox" id="math-10" />
												<label for="math-10">
													<span className="checkbox-circle">
														<span className="icon icon-check-mark"></span>
													</span>
													<span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
										</form>
									</div>
								</div>
								<div className="skill-sub-block">
									<form className="form-group">
										<input type="text" className="form-control" placeholder="Write new skill" />
										<button className="add-btn btn btn-blue">
											<span className="icon icon-add"></span>
										</button>
									</form>
									<div className="skill-tags-block clearfix">
										<div className="skill-tag">Math</div>
										<div className="skill-tag">Trigonometry</div>
										<div className="skill-tag">Calculus</div>
										<div className="skill-tag">Trigonometry</div>
										<div className="skill-tag">Calculus</div>
										<div className="skill-tag">Trigonometry</div>
										<div className="skill-tag">Calculus</div>
										<div className="skill-tag">Math</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="form-block">
						<div className="form-block-wrapper promo-sample-block">
							<div className="radio-block">
								<div className="radio">
									<input type="radio" name="promo-sample" id="promo-cr" value="promo-cr" checked="checked" />
									<label for="promo-cr">
										<span className="checkbox-sqw">
											<span className="icon icon-check-mark"></span>
										</span>
										<span className="radio-text">Create Sample</span>
									</label>
								</div>
								<div className="post-job-inputs">
									<input type="text" placeholder="Job Title" className="job-title form-control" />
									<textarea placeholder="Job Description" className="form-control job-descr" rows="4"></textarea>
								</div>
								<button className="btn btn-bold btn-blue">Create Promotion</button>
							</div>
							<div className="radio-block">
								<div className="radio">
									<input type="radio" name="promo-sample" id="promo-ch" value="promo-ch" checked="checked" />
									<label for="promo-ch">
										<span className="checkbox-sqw">
											<span className="icon icon-check-mark"></span>
										</span>
										<span className="radio-text">Or Chouse Sample</span>
									</label>
								</div>
								<div className="promo-block-form">
									<div className="promo-block-form-header flexbox justify-space-between">
										<div className="filter-nav flexbox justify-space-between">
											<div className="my-select-box form-control">
												<span className="my-select-result flexbox justify-space-between">
													<span className="text">Category</span> 
													<span className="caret"></span>
												</span>
												<div className="my-select-options">
													<div className="radio-block">
														<div className="radio">
															<input type="radio" name="numb-options" id="1-term" value="1-term" checked="" />
															<label for="1-term">
																<span className="radio-text">1</span>
															</label>
														</div>
														<div className="radio">
															<input type="radio" name="numb-options" id="2-term" value="2-term" checked="" />
															<label for="2-term">
																<span className="radio-text">2</span>
															</label>
														</div>
													</div>	
												</div>
											</div>
											<div className="my-select-box form-control">
												<span className="my-select-result flexbox justify-space-between">
													<span className="text">Sub Category</span> 
													<span className="caret"></span>
												</span>
												<div className="my-select-options">
													<div className="radio-block">
														<div className="radio">
															<input type="radio" name="numb-options" id="1-term" value="1-term" checked="" />
															<label for="1-term">
																<span className="radio-text">1</span>
															</label> 
														</div>
														<div className="radio">
															<input type="radio" name="numb-options" id="2-term" value="2-term" checked="" />
															<label for="2-term">
																<span className="radio-text">2</span>
															</label>
														</div>
													</div>	
												</div>
											</div>
										</div>
										<div className="results-numb">
											<span className="numb">12</span> results
										</div>
									</div>
									<div className="promo-block-form-body">
										<div className="checkbox-block">
											<input type="checkbox" id="skill-test-1" />
											<label for="skill-test-1">
												<div className="panel-block flexbox">
													<span className="checkbox-circle checkbox-sqw">
														<span className="icon icon-check-mark"></span>
													</span>
													<div className="panel-wrapper">
														<div className="panel panel-blue">
															<div className="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span className="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div className="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
										<div className="checkbox-block">
											<input type="checkbox" id="skill-test-2" />
											<label for="skill-test-2">
												<div className="panel-block flexbox">
													<span className="checkbox-circle checkbox-sqw">
														<span className="icon icon-check-mark"></span>
													</span>
													<div className="panel-wrapper">
														<div className="panel panel-orange">
															<div className="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span className="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div className="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
										<div className="checkbox-block">
											<input type="checkbox" id="skill-test-3" />
											<label for="skill-test-3">
												<div className="panel-block flexbox">
													<span className="checkbox-circle checkbox-sqw">
														<span className="icon icon-check-mark"></span>
													</span>
													<div className="panel-wrapper">
														<div className="panel panel-pink">
															<div className="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span className="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div className="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
									</div>
								</div>
								<button className="btn btn-bold btn-blue">Add Promotion</button>
							</div>
						</div>
					</div>
					<div className="form-block">
						<div className="form-block-wrapper flexbox justify-space-between">
							<div className="form-block-section">
								<div className="form-block-header">
									<div className="form-block-title">
										Job Payment
									</div>
								</div>
								<div className="radio-block">
									<div className="radio">
										<input type="radio" name="job-payment" id="fixed-payment" value="fixed-payment" checked="" />
										<label for="fixed-payment">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">Fixed Price</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="job-payment" id="hourly-payment" value="hourly-payment" />
										<label for="hourly-payment">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">Hourly</span>
											<span className="job-payment-input-wrapper">
												<input type="text" value="20" className="form-control" />
												$ / hour
											</span>
										</label>
									</div>
								</div>
							</div>
							<div className="form-block-section">
								<div className="form-block-header">
									<div className="form-block-title">
										Job Price
									</div>
								</div>
								<div className="job-price-input-wrapper">
									<input className="form-control" type="text" value="500" /> $
									<p className="small">Enter here how much you think it should cost you..</p>
								</div>
							</div>
						</div>
						<div className="form-block-wrapper">
							<div className="form-block-section job-time-block col-100">
								<div className="form-block-header">
									<div className="form-block-title">
										Estimated time to complete the Job
									</div>
								</div>
								<div className="btn-group">
									<button className="btn btn-bg-transparent">
										<div className="my-select-box">
												<span className="my-select-result">
													<span className="text">3</span> 
													<span className="caret"></span>
												</span>
												<div className="my-select-options">
													<div className="radio-block">
													<div className="radio">
														<input type="radio" name="numb-options" id="1-term" value="1-term" checked="" />
														<label for="1-term">
															<span className="radio-text">1</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="2-term" value="2-term" checked="" />
														<label for="2-term">
															<span className="radio-text">2</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="3-term" value="3-term" checked="" />
														<label for="3-term">
															<span className="radio-text">3</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="4-term" value="4-term" checked="" />
														<label for="4-term">
															<span className="radio-text">4</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="5-term" value="5-term" checked="" />
														<label for="5-term">
															<span className="radio-text">5</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="6-term" value="6-term" checked="" />
														<label for="6-term">
															<span className="radio-text">6</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="7-term" value="7-term" checked="" />
														<label for="7-term">
															<span className="radio-text">7</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="8-term" value="8-term" checked="" />
														<label for="8-term">
															<span className="radio-text">8</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="9-term" value="9-term" checked="" />
														<label for="9-term">
															<span className="radio-text">9</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="10-term" value="10-term" />
														<label for="10-term">
															<span className="radio-text">10</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="11-term" value="11-term" />
														<label for="11-term">
															<span className="radio-text"> 11</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="numb-options" id="12-term" value="12-term" />
														<label for="12-term">
															<span className="radio-text">12</span>
														</label>
													</div>
												</div>	
												</div>
											</div>
										</button>
									<button className="btn btn-bg-transparent" >
										<div className="my-select-box">
												<span className="my-select-result">
													<span className="text">Week</span> 
													<span className="caret"></span>
												</span>
												<div className="my-select-options">
													<div className="radio-block">
													<div className="radio">
														<input type="radio" name="period-options" id="d-term" value="d-term" checked="" />
														<label for="d-term">
															<span className="radio-text">Day</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="period-options" id="w-term" value="w-term" />
														<label for="w-term">
															<span className="radio-text">Week</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="period-options" id="m-term" value="m-term" />
														<label for="m-term">
															<span className="radio-text"> Month</span>
														</label>
													</div>
													<div className="radio">
														<input type="radio" name="period-options" id="y-term" value="y-term" />
														<label for="y-term">
															<span className="radio-text">Year</span>
														</label>
													</div>
												</div>	
												</div>
										</div>
									</button>
								</div>
							</div>
						</div>
						<div className="form-block-wrapper flexbox justify-space-between">
							<div className="form-block-section col-30">
								<div className="form-block-header">
									<div className="form-block-title">
										Talent Commitment
									</div>
								</div>
								<div className="radio-block">
									<div className="radio">
										<input type="radio" name="commitment-option" id="later" value="later" checked="" />
										<label for="later">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">I will Decide Later</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="commitment-option" id="10hrs" value="10hrs" />
										<label for="10hrs">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">10 hrs per week</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="commitment-option" id="30hrs" value="30hrs" />
										<label for="30hrs">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">Up to 30 hrs per week</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="commitment-option" id="30morehrs" value="30morehrs" />
										<label for="30morehrs">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">More than 30 hrs per week</span>
										</label>
									</div>
								</div>
							</div>
							<div className="form-block-section">
								<div className="form-block-header">
									<div className="form-block-title">
										Talent Level
									</div>
								</div>
								<div className="radio-block">
									<div className="radio">
										<input type="radio" name="lavel-otion" id="level-int" value="level-int" checked="" />
										<label for="level-int">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">Intern</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="lavel-otion" id="level-jun" value="level-jun" />
										<label for="level-jun">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">Junior</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="lavel-otion" id="level-sen" value="level-sen" />
										<label for="level-sen">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">Senior</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="lavel-otion" id="level-exp" value="level-exp" />
										<label for="level-exp">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">Expert</span>
										</label>
									</div>
								</div>
							</div>
							<div className="form-block-section col-30">
								<div className="form-block-header">
									<div className="form-block-title">
										How Many Talents Do you want to try
									</div>
								</div>
								<div className="radio-block">
									<div className="radio">
										<input type="radio" name="quantity-option" id="quantity-1" value="quantity-1" checked="" />
										<label for="quantity-1">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">1</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="quantity-option" id="quantity-3" value="quantity-3" />
										<label for="quantity-3">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">3</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="quantity-option" id="quantity-5" value="quantity-5" />
										<label for="quantity-5">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">5</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="quantity-option" id="quantity-infinity" value="quantity-infinity" />
										<label for="quantity-infinity">
											<span className="checkbox-circle">
												<span className="icon icon-check-mark"></span>
											</span>
											<span className="radio-text">As many as will be</span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="form-block-wrapper">
							<div className="form-block-section col-100">
								<div className="form-block-header">
									<div className="form-block-title">
										Contract General Notes
									</div>
								</div>
								<div>
									<textarea className="form-control comments-area" placeholder="Enter here Comments for the contract"></textarea>
								</div>
							</div>
						</div>
						<div className="form-block-wrapper">
							<div className="form-block-section finish-block col-100">
								<div className="form-block-header">
									<div className="form-block-title">
										Finish
									</div>
								</div>
								<div className="checkbox-block">
									<input type="checkbox" id="terms-agree" />
									<label for="terms-agree">
										<span className="checkbox-circle">
											<span className="icon icon-check-mark"></span>
										</span>
										<span className="checkbox-text">I agree for the terms of use</span>
									</label>
								  </div>
                </div>
							</div>
						</div>
						<div className="form-block-wrapper btn-block">
							<button className="btn btn-blue btn-bold">Preview Before Posting</button>
							<button className="btn btn-blue btn-bold">Continue</button>
						</div>
					{/* </div> */}
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
	
	export default connect(mapStateToProps, mapDispatchToProps)(Tellent)