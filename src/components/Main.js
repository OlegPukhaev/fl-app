import Reactotron from 'reactotron-react-js';
import React from 'react';
import {connect} from 'react-redux';
import {fetchValidateToken} from './../functions/auth';
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom';
import {isUserLogin} from './../selectors'
import {fetchSignOut} from './../functions/auth';
import Skills from './Skills';
import User from './User';
import '../../node_modules/toastr/build/toastr.css';
import {setUserStatus} from '../reducers/getUser';
import { bindActionCreators } from 'redux';
import '../../node_modules/toastr/build/toastr.css';
import Tellent from './Tellent';

class Main extends React.Component {
  constructor (props) {
    super(props);
	}

	onClickSignOut = () => {
		fetchSignOut();
		this.props.history.push('/user');
	}


	componentWillMount = () => {
		if (document.cookie) {
			fetchValidateToken().then(response => {
				this.props.setUserStatus(true);
			})
		} else {
			this.props.setUserStatus(false);
			this.props.history.push('/user');
		}
	}

  render() {
    return (
			<BrowserRouter>
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
										<a><Link to="/tellent">Teachers </Link><div class="caret"></div></a>
									</li>
									<li class="active">
										<a><Link to="/skills">Profile</Link> <div class="caret"></div></a>
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

											{/* {this.props.isUserLogin === true && <Skills />}
											{this.props.isUserLogin === true && <Tellent />} */}
											<Switch>
												<Route exact path="/user" component={User} />
												{/* <Route exact path="/" component={Home} /> */}
												<Route exact path="/skills" component={Skills} />
												<Route exact path="/tellent" component={Tellent} />
											</Switch>
										</div>
									</div>
                </div>
              </div>
						</div> 
          </div>
        </div>
      </div>
			</BrowserRouter>
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

const mapStateToProps = state => {
  return {
		isUserLogin: isUserLogin(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
