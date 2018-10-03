import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchSignOut} from './../functions/auth';
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
	
	onClickSignOut = () => {
		fetchSignOut();
		this.props.history.push('/user');
	}

    render() {
		Reactotron.log('Get Data', this.props.search);
      return (

		
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

										{/* <JobBoxJobs currPage="1"/> */}
										{<JobBoxJobs />}
										<JobBoxTellent/>
										{/* {this.props.user.isUserLogin === true && <JobBoxTellent data={this.props.search.tellentsData}/>}
										{this.props.user.isUserLogin === true && <JobBoxJobs data={this.props.search.jobsData}/>} */}
									{/* } */}
									
										
										{/* {this.getButton()} */}
										{(this.props.jobsData !== null && this.props.jobsData.meta.next_page !== null && this.props.isJobs === true) && <LoadMore />}
										{(this.props.tellentsData !== null && this.props.tellentsData.meta.next_page !== null && this.props.isTellents === true) && <LoadMore />}

 								</div>


 								<div class="col-xs-3 right-sidebar">
							
 									<div class="panel panel-default panel-btn">
 										<a href="">
 											<i class="icon icon-hand"></i>
 											<span> Start New Promotion </span>
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