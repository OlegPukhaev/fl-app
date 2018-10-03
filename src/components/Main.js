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
import Forms from './../components/jobs/Forms'
import './../App';

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
      <div className="wrapper">
			
        <nav className="main-top-nav flexbox justify-space-between">
    			<div className="logo">
    				<a className="logo-link" href="index.html"><img src="images/logo.png" height="39" width="auto" /></a>
    			</div>
    			<div type="button" className="humburger-icon">
					<button type="button" className="btn btn-bg-transparent"><span className="icon icon-menu"></span></button>
				</div>
    			<section className="nav-mobile flexbox justify-space-between">
    				<section className="nav-tablet flexbox justify-space-center">
    					<div className="search-form">
		    				<form className="my-search-form" role="search">
		    					<input type="text" className="form-control" placeholder="Search" />
		    					<div className="search-filter radio-block">
									<div className="radio">
										<input type="radio" name="profile-page-filter" id="jobs-filter" value="jobs-filter" checked />
										<label for="jobs-filter">
											<span className="radio-text">Jobs</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="profile-page-filter" id="talents-filter" value="talents-filter" />
										<label for="talents-filter">
											<span className="radio-text">Talents</span>
										</label>
									</div>
								</div>
								<a href="" type="submit" className="btn-search"><i className="icon icon-loupe"></i></a>
							</form>
		    			</div>
		    			<div className="nav-list">
		    				<ul className="flexbox justify-space-between">
									<li>
										<a><Link to="/tellents">Find </Link><div className="caret"></div></a>
									</li>
									<li className="active">
										<a><Link to="/skills">Profile</Link> <div className="caret"></div></a>
									</li>
									<li>
										<a href="#"> <div className="caret"></div></a>
									</li>
									<li>
										<a href="">About <div className="caret"></div></a>
									</li>
							</ul>
		    			</div>
    				</section>
	    			<div className="user-box">
	    				<div className="user-photo">
	    					<i className="notif"></i>
	    				</div>
	    				<div className="user-box-nav dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Philip Seamor<span className="caret"></span></a>
							 <ul className="dropdown-menu">
								<li><a onClick={this.onClickSignOut}>Logout</a></li>
								<li><a onClick={this.onClickSignIn}><Link to="/user">Login</Link></a></li>
							  </ul>
						</div>
	    			</div>
    			</section>
    		</nav>
        
				<Switch>
					<Route exact path="/user" component={User} />
					<Route exact path="/jobs/forms" component={Forms} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/tellents" component={Tellent} />
				</Switch>

				<Forms />
				

				<footer className="bg-white no-mrg">
					<div className="container">
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
