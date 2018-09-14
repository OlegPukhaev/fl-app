
import React from 'react';
import {connect} from 'react-redux';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
// import Home from './Home';
import Skills from './Skills';
import Tellent from './Tellent';

import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import User from './User';
import LinkPage from './LinkPage';
import {getToken} from '../functions/config'
import {setUserStatus} from '../reducers/getUser';
import { bindActionCreators } from 'redux';

var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');

Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});

var configapi = getToken();

class Main extends React.Component {

  constructor (props) {
    super(props);
	}
	
	onClickSignOut = () => {
		localStorage.clear();
		Auth.signOut();
		this.props.setUserStatus(false);
		this.props.history.push('/User');
	}

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
    					<div class="search-form">
		    				<form class="my-search-form" role="search">
		    					<input type="text" class="form-control" placeholder="Search" />
		    					<div class="search-filter radio-block">
									<div class="radio">
										<input type="radio" name="profile-page-filter" id="jobs-filter" value="jobs-filter" checked />
										<label for="jobs-filter">
											<span class="radio-text">Jobs</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="profile-page-filter" id="talents-filter" value="talents-filter" />
										<label for="talents-filter">
											<span class="radio-text">Talents</span>
										</label>
									</div>
								</div>
								<a href="" type="submit" class="btn-search"><i class="icon icon-loupe"></i></a>
							</form>
		    			</div>
		    			<div class="nav-list">
		    				<ul class="flexbox justify-space-between">
		                        <li>
		                            <a href="#">Teachers <div class="caret"></div></a>
		                        </li>
		                        <li class="active">
		                            <a href="#">Profile <div class="caret"></div></a>
		                        </li>
		                        <li>
		                            <a href="#">Favorites <div class="caret"></div></a>
		                        </li>
								 						<li>
		                            <a href="">About <div class="caret"></div></a>
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
								<li><a href="" onClick={this.onClickSignOut}>Logout</a></li>
							  </ul>
						</div>
	    			</div>
    			</section>
    		</nav>
        
        <div class="content">
          <div class="container-fluid">
            <div class="panel panel-default my-main-panel">
              <div class="panel-body">
                <div class="flexbox">
									<div class="right-col">
																	{/* <!-- Nav tabs --> */}
																	<ul class="nav nav-pills nav-stacked my-sidebar" role="tablist">
																		<li role="presentation">
																			<a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">
																				<span class="icon icon-overview"></span>
																				Overview
																			</a>
																		</li>
																		<li role="presentation">
																			<a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
																				<span class="icon icon-message"></span>
																				Messages
																			</a>
																		</li>
																		<li role="presentation">
																			<a href="#my-jobs" aria-controls="my-jobs" role="tab" data-toggle="tab">
																				<span class="icon icon-jobs"></span>
																				My Jobs
																			</a>
																		</li>
																		<li role="presentation">
																			<a href="#my-promo" aria-controls="my-promo" role="tab" data-toggle="tab">
																				<span class="icon icon-promo"></span>
																				My Promo
																			</a>
																		</li>
																		<li role="presentation" class="active">
																			<a href="#skills" aria-controls="skills" role="tab" data-toggle="tab">
																			<span class="icon icon-skills"></span>
																				My Skills
																			</a>
																		</li>
																		<li role="presentation" >
																			<a href="#saved" aria-controls="saved" role="tab" data-toggle="tab">
																				<span class="icon icon-saved"></span>
																				Saved
																			</a>
																		</li>
																		<li role="presentation">
																			<a href="#media" aria-controls="media" role="tab" data-toggle="tab">
																				<span class="icon icon-media"></span>
																				My Media
																			</a>
																		</li>
																		<li role="presentation">
																			<a href="#accounts" aria-controls="accounts" role="tab" data-toggle="tab">
																				<span class="icon icon-accounts"></span>
																				Accounts
																			</a>
																		</li>
																		<li role="presentation">
																			<a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
																				<span class="icon icon-profile"></span>
																				Profile
																			</a>
																		</li>
																	</ul>
														
															</div>	{/* <!--right-col End--> */}

															<div class="left-col">
																	<div class="tab-content my-central-info">
																		{/* <!--Skills page START --> */}

																		<Skills />
																		
																		{/* <Route exact={true} path="/skills" component={Skills} />
        												    <Route path="/tellent" component={Tellent} />		 */}
																	</div>
															</div>



                </div>
              </div>
             </div> 

          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUserStatus
    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
