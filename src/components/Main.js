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


	// componentWillMount = () => {
	// 	if (document.cookie) {
	// 		fetchValidateToken().then(response => {
	// 			this.props.setUserStatus(true);
	// 		})
	// 	} else {
	// 		this.props.setUserStatus(false);
	// 		// this.props.history.push('/user');
	// 	}
	// }

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
										<a><Link to="/tellent">Find </Link><div class="caret"></div></a>
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
								<li><a onClick={this.onClickSignOut}>Logout</a></li>
								<li><a onClick={this.onClickSignIn}><Link to="/user">Login</Link></a></li>
							  </ul>
						</div>
	    			</div>
    			</section>
    		</nav>
        
				<Switch>
					<Route exact path="/user" component={User} />
					{/* <Route exact path="/" component={Home} /> */}
					<Route path="/skills" component={Skills} />
					<Route path="/tellent" component={Tellent} />
				</Switch>
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
