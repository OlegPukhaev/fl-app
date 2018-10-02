import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../functions/api';
import '../../node_modules/toastr/build/toastr.css';
import {arrForUpdate} from './../functions/function';
import {getTellentsData, getJobsData, getLanguage, getCountries, getCountriesJobs, getLanguageJobs} from './../reducers/search';
import {jobsData, tellentsData, totalCount, isTellents, isJobs} from './../selectors';
import NoResultJobs from './tellents/NoResultJobs';
import NoResultTellents from './tellents/NoResultTellents';
import JobBoxesFilter from './tellents/JobBoxesFilter';
import LeftSideBarFilters from './tellents/LeftSideBarFilters';
import SearchForm from './tellents/SearchForm';
import JobBoxTellent from './tellents/JobBoxTellent';
import JobBoxJobs from './tellents/JobBoxJobs';
import LeftSideBarFiltersJobs from './tellents/LeftSideBarFiltersJobs';
import SortNav from './tellents/SortNav';
import LoadMore from './tellents/LoadMore';
const queryString = require('query-string');
// import queryString fro

class Tellent extends React.Component {
	
	// componentDidMount = () => {
	// 	// if (this.props.search.isUserLogin === true) {

	// 	// 			var StringifyQ = queryString.stringify({
	// 	// 				q: JSON.stringify({})//временно для создания редьюсера, чобы было все норм
	// 	// 			});
			
	// 	// 			getData('/api/v1/tellents/search?'+StringifyQ).then(apiData => {
	// 	// 				this.props.getTellentsData(apiData.data);
	// 	// 			});
	// 	// 			getData('/api/v1/jobs/search?'+StringifyQ).then(apiData => {
	// 	// 				this.props.getJobsData(apiData.data);
	// 	// 			});
	// 	// } 
	// }


    render() {
		Reactotron.log('Get Data', this.props.search);
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
										{/* {this.props.search.toggler} */}

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
 									<SearchForm />
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
									<SortNav />
 								</nav>
 							</div>
 						</div>
 					</div>{/* <!-- job-boxes-header row -End --> */}

 					<div class="row main-content flexbox">
 						<div class="col-xs-2 left-sidebar">

            	 <LeftSideBarFilters/>
							<LeftSideBarFiltersJobs/>
							   
 						</div>{/* <!--col-xs-2 End--> */}

						
 						<div class="col-xs-10 container-fluid job-boxes job-boxes--talents">
 							<div class="flexbox row">
 								<div class="col-xs-12">

									{/* <NoResultTellents /> */}

									{/* <NoResultJobs /> */}

										<JobBoxJobs/>
										<JobBoxTellent/>
										{/* {this.props.user.isUserLogin === true && <JobBoxTellent data={this.props.search.tellentsData}/>}
										{this.props.user.isUserLogin === true && <JobBoxJobs data={this.props.search.jobsData}/>} */}
									{/* } */}
									
										<LoadMore />
										
 								</div>


 								<div class="col-xs-3 right-sidebar">
							
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

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
				getTellentsData,
				getJobsData,
				getLanguage,
				getCountries,
				getCountriesJobs,
				getLanguageJobs
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			user:state.user,
			search:state.search,
			jobsData:jobsData(state),
			tellentsData:tellentsData(state),
			totalCount: totalCount(state),
			isTellents:isTellents(state),
			isJobs:isJobs(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(Tellent)