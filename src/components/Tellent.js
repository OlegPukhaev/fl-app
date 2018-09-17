import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';
// import './bootstrap/css/bootstrap.min.css';
// import './styles/styles.css';
// import './styles/media.css';

import '../../node_modules/toastr/build/toastr.css';
import { userValid } from '../reducers/getUser';
import NoResultJobs from './tellents/NoResultJobs';
import NoResultTellents from './tellents/NoResultTellents';
import JobBoxesFilter from './tellents/JobBoxesFilter';
import LeftSideBarFilters from './tellents/LeftSideBarFilters';
import SearchForm from './tellents/SearchForm';
import JobBoxTellent from './tellents/JobBoxTellent';
import JobBoxJobs from './tellents/JobBoxJobs';
// var Auth = require('../../node_modules/j-toker/src/j-toker.js');

class Tellent extends React.Component {
    render() {
      return (
        <div class="wrapper">
    		<nav class="main-top-nav flexbox justify-space-between">
    			<div class="logo">
    				<a class="logo-link" href="index.html"><img src="images/logo.png" height="39" width="auto" /></a>
    			</div>
    			<div type="button" class="humburger-icon">
					<button type="button" class="btn btn-bg-transparent"><span class="icon icon-menu"></span></button>
				</div>
    			<section class="nav-mobile flexbox justify-space-between">
    				<section class="nav-tablet flexbox justify-space-center">

              <SearchForm />

		    			<div class="nav-list">
		    				<ul class="flexbox justify-space-between">
		                        <li class="active">
		                            <a href="#">Teachers <div class="caret"></div></a>
		                        </li>
		                        <li>
		                            <a href="profile.html">Profile <div class="caret"></div></a>
		                        </li>
		                        <li>
		                            <a href="#">Favorites <div class="caret"></div></a>
		                        </li>
								 <li>
		                            <a href="#">About <div class="caret"></div></a>
		                        </li>
		                    </ul>
		    			</div>
    				</section>
	    			<div class="user-box">
{/*             
						<div class="notifications">
							<div class="notifications-icon">
								<div class="notif">
								</div>
							</div>
							<div class="notifications-dropdown">
								<div class="notifications-dropdown__header">
									Notifications
								</div>
								<div class="element-list">
									<div class="element-list__item flexbox align-items-center">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img  class="circul-shape" src="images/bid-photo.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__item--text">
												<a href="javascript:;" class="element-list__item-link">
													Tamir Yaacov
												</a>
												sent you a message
											</div>
											<div class="element-list__item-date">
												Today, 15:45 pm
											</div>
										</div>
									</div>
									<div class="element-list__item flexbox align-items-center element-list__item--active">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img src="images/money-icon.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__text">
												You received payment for job
												<a href="javascript:;" class="element-list__item-link">
													HTML to PSD
												</a>
											</div>
											<div class="element-list__item-date">
												19 Nov, 15:45 pm
											</div>
										</div>
									</div>
									<div class="element-list__item flexbox align-items-center element-list__item--active">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img src="images/horn-icon.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__text">
												Your skill test was approved for the job
												<a href="javascript:;" class="element-list__item-link">
													«PHP, CSS and Joomla Tasks».
												</a>
											</div>
											<div class="element-list__item-date">
												19 Nov, 15:45 pm
											</div>
										</div>
									</div>
									<div class="element-list__item flexbox align-items-center">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img src="images/case-icon-grey.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__item--text">
												Client apply you to a job
												<a href="javascript:;" class="element-list__item-link">
													«PHP, CSS and Joomla Tasks».
												</a>

											</div>
											<div class="element-list__item-date">
												Today, 15:45 pm
											</div>
										</div>
									</div>
									<div class="element-list__item flexbox align-items-center">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img src="images/case-icon-grey.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__item--text">
												You ended the job
												<a href="javascript:;" class="element-list__item-link">
													«Landing Page»
												</a>

											</div>
											<div class="element-list__item-date">
												Today, 15:45 pm
											</div>
										</div>
									</div>
									<div class="element-list__item flexbox align-items-center">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img  class="circul-shape" src="images/bid-photo.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__item--text">
												<a href="javascript:;" class="element-list__item-link">
													Tamir Yaacov
												</a>
												leave a feedback for you for job «Sale page design»
											</div>
											<div class="element-list__item-date">
												Today, 15:45 pm
											</div>
										</div>
									</div>
									<div class="element-list__item flexbox align-items-center">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img src="images/case-icon-grey.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__item--text">
												New job could be interesting for you,
												<a href="javascript:;" class="element-list__item-link">
													«Landing Page»
												</a>

											</div>
											<div class="element-list__item-date">
												Today, 15:45 pm
											</div>
										</div>
									</div>
									<div class="element-list__item flexbox align-items-center">
										<div class="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
											<img src="images/case-icon-grey.png" alt="" />
										</div>
										<div class="element-list__item-description">
											<div class="element-list__item--text">
												You received 3 new bids on your job
												<a href="javascript:;" class="element-list__item-link">
													«Landing Page»
												</a>

											</div>
											<div class="element-list__item-date">
												Today, 15:45 pm
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
	    				 */}
              <div class="user-photo">
	    					<i class="notif"></i>
	    				</div>
	    				<div class="user-box-nav dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Philip Seamor<span class="caret"></span></a>
							 <ul class="dropdown-menu">
								<li><a href="#" data-toggle="modal" data-target="#sign-up-modal">Sign Up</a></li>
								<li><a href="#" data-toggle="modal" data-target="#massege-dialogs-modal">Messages</a></li>
								<li><a href="#">Something else here</a></li>
								<li><a href="#">One more separated link</a></li>
							  </ul>
						</div>
	    			</div>
    			</section>
    		</nav>
		
			<div class="content">
				<div class="container-fluid">

					<div class="row content-header flexbox">
						<div class="col-xs-2 left-sidebar">
							<div class="hello-header">
								<div class="blue-color hello-header-name"><span class="user-name">Hi Philip</span>,</div>
								<div class="hello-header-text">What are you looking for toady?</div>
							</div>
						</div>
						<div class="col-xs-10">
							<div class="search-form">
			    				<form class="my-search-form" role="search">
			    					<input type="text" class="form-control" placeholder="Search for ..." />
			    					<div class="search-filter radio-block clearfix">
										<div class="radio">
											<input type="radio" name="home-page-filter" id="jobs-filter-1" value="jobs-filter" checked />
											<label for="jobs-filter-1">
												<span class="radio-text mobile-hide">Jobs</span>
												<span class="radio-text mobile-show">J</span>
											</label>
										</div>
										<div class="radio">
											<input type="radio" name="home-page-filter" id="talents-filter-1" value="talents-filter" />
											<label for="talents-filter-1">
												<span class="radio-text mobile-hide">Talents</span>
												<span class="radio-text mobile-show">T</span>
											</label>
										</div>
									</div>
									<a href="" type="submit" class="btn-search"><i class="icon icon-loupe"></i></a>
								</form>
			    			</div>
			    			{/* <div class="job-post-status flexbox justify-space-between">
			    				<div>
			    					<span class="status-text"><em>Job was posted successfully</em></span>
					    			<a href="#">Preview</a>
					    			<a href="#">Go to My Jobs</a>
			    				</div>
				    			<button class="btn btn-bg-transparent close-btn icon-btn"><span class="glyphicon glyphicon-remove"></span></button>
				    		</div> */}
			    		</div>
					</div>{/* <!-- content-header row - END --> */}

					<div class="row job-boxes-header flexbox">
						<div class="col-xs-2 left-sidebar">
               
              				<JobBoxesFilter />

							<button class="btn filter-btn panel-gray">
								<div class="flexbox justify-space-between">
									<span>Advanced Filters</span> 
									<span class="icon icon-next-arrow"></span>
								</div>
							</button>
						</div>
						<div class="col-xs-10">
							<div class="panel panel-default panel-gray job-boxes-nav">
								<nav class="flexbox justify-space-between">
									{/* <div class="filter-nav">
										<span class="filter-list-title">Jobs for me</span>
										<ul class="filter-list list-unstyled">
											<li class="blue-color">UI design</li>
											<li class="blue-color">CSS/HTML</li>
											<li class="blue-color">
												<span class="icon icon-plus-button"></span>
											</li>
										</ul>
									</div> */}
									<div class="sort-nav">
										<span class="sort-nav-title">Sort By</span>
										<button type="button" class="btn">
											<div class="my-select-box">
												<span class="my-select-result">
													<span class="text">Relevance</span> 
													<span class="icon icon-down-arrow"></span>
												</span>
												<div class="my-select-options">
													<div class="caret-block">
														<span class="caret-top"></span>
													</div>
													<div class="radio-block">
														<div class="radio">
															<input type="radio" name="jobs-sort-option" id="jobs-sort-option-1" value="jobs-sort-option-1" checked="" />
															<label for="jobs-sort-option-1">
																<span class="check-mark icon icon-check-mark"></span>
																<span class="radio-text">Relevance</span>
															</label>
														</div>
														<div class="radio">
															<input type="radio" name="jobs-sort-option" id="jobs-sort-option-2" value="jobs-sort-option-2" />
															<label for="jobs-sort-option-2">
																<span class="check-mark icon icon-check-mark"></span>
																<span class="radio-text">Date</span>
															</label>
														</div>
														<div class="radio">
															<input type="radio" name="jobs-sort-option" id="jobs-sort-option-3" value="jobs-sort-option-3" />
															<label for="jobs-sort-option-3">
																<span class="check-mark icon icon-check-mark"></span>
																<span class="radio-text">Rate</span>
															</label>
														</div>
														<div class="radio">
															<input type="radio" name="jobs-sort-option" id="jobs-sort-option-4" value="jobs-sort-option-4" />
															<label for="jobs-sort-option-4">
																<span class="check-mark icon icon-check-mark"></span>
																<span class="radio-text">Alfabet</span>
															</label>
														</div>
													</div>	
												</div>
											</div>
										</button>
										<span class="sort-result">
											Result: 
											<span class="sort-result-numb">25</span>
										</span>
									</div>
								</nav>
							</div>
						</div>
					</div>{/* <!-- job-boxes-header row -End --> */}

					<div class="row main-content flexbox">
						<div class="col-xs-2 left-sidebar">

                  <LeftSideBarFilters />
							
						</div>{/* <!--col-xs-2 End--> */}

						
						<div class="col-xs-10 container-fluid job-boxes job-boxes--talents">
							<div class="flexbox row">
								<div class="col-xs-12">

                  {/* <NoResultTellents /> */}

                  {/* <NoResultJobs /> */}

                  {/* <JobBoxTellent />
                  <JobBoxTellent />
                  <JobBoxTellent />
                  <JobBoxTellent /> */}

                  <JobBoxJobs />
								</div>

								<div class="col-xs-3 right-sidebar">
							
									{/* <div class="panel panel-default progress-boxes">
										<h4 class="blue-color">General Rank: 8.7</h4>
										
										<div class="progress-box">
											<div class="progress-info blue-color">
												<a href="#" class="progress-title">Profile Completion</a>
												<span class="progress-perc float-right">50%</span>
											</div>
												
											<div class="progress">
												<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">
												</div>
											</div>
										</div>
										
										<div class="progress-box">
											<div class="progress-info blue-color">
												<a href="#" class="progress-title">Profile Strength</a>
												<span class="progress-perc float-right">30%</span>
											</div>
												
											<div class="progress">
												<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%;">
												</div>
											</div>
										</div>
										
										<div class="progress-box">
											<div class="progress-info blue-color">
												<a href="#" class="progress-title">Responsivity</a>
												<span class="progress-perc float-right">60%</span>
											</div>
												
											<div class="progress">
												<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
												</div>
											</div>
										</div>
										
									</div><!--panel end--> */}
									
									
									<div class="panel panel-default panel-btn">
										<a href="">
											<i class="icon icon-hand"></i>
											<span> Propose New Lesson </span>
										</a>
									</div>{/* <!--panel end--> */}
									
									<div class="panel panel-default panel-btn">
										<a href="">
											<i class="icon icon-new"></i>
											<span> Start New Promotion </span>
										</a>
									</div>{/* <!--panel end--> */}
									
									<div class="panel panel-default panel-btn">
										<a href="">
											<i class="icon icon-share"></i>
											<span> Share Your Project</span>
										</a>
									</div>{/* <!--panel end--> */}
									
								</div>{/* <!--col-xs-3 End--> */}

							</div>
														
						</div>{/* <!--/col-xs-10 END --> */}
												
					</div>{/* <!--main-content row End--> */}
				</div> 
			</div>{/* <!--content End--> */}
	
	
	
			<footer class="bg-white no-mrg">
				<div class="container">
					<span>© 2016 Talents </span>
					<ul>
						<li><a href="">Terms of Use</a></li>
						<li><a href="">Privacy Policy</a></li>
						<li><a href="">About Us</a></li>
						<li><a href="">Blog</a></li>
					</ul>
				</div>
			</footer>
		</div>
      );
    }
  }

  export default Tellent;