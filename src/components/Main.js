
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Home from './Home';
import Skills from './Skills';
import Tellent from './Tellent';

import '../App.css';
import '../../node_modules/toastr/build/toastr.css';
import User from './User';
import LinkPage from './LinkPage';
import {getToken} from '../functions/config'
import {addUser, userValid} from '../reducers/getUser';


var Auth = require('../../node_modules/j-toker/src/j-toker.js'),
    PubSub = require('../../node_modules/pubsub-js/src/pubsub.js'),
    toastr = require('../../node_modules/toastr/toastr');

Auth.configure({apiUrl:'https://floating-atoll-63112.herokuapp.com/api'});

var configapi = getToken();
console.log("Token!!!!", configapi);
// const AppStackNavigator = createStackNavigatior({
//   login: {
//     screen: User
//   }
// })



class Main extends React.Component {

  constructor (props) {
    super(props);
  }


  render() {
    return (
      <div class="wrapper">
        {/* /// */}
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
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li><a href="#">One more separated link</a></li>
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
								<BrowserRouter>
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
																		<li role="presentation">
																			{/* <a href="#skills" aria-controls="skills" role="tab" data-toggle="tab">
																				<span class="icon icon-skills"></span>
																				My Skills
																			</a> */}
																			<Link to="/skills" aria-controls="skills" role="tab" data-toggle="tab"><span class="icon icon-skills"></span>My Skills</Link>
																		</li>
																		<li role="presentation" class="active">
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
														</BrowserRouter>
															</div>	{/* <!--right-col End--> */}

															<div class="left-col"></div>
																	{/* <!-- Tab panes --> */}
																	<div class="tab-content my-central-info">

																		{/* <!--Skills page START --> */}
																		<div role="tabpanel" class="tab-pane my-tab step-1-open" id="skills">
																			<div class="steps-nav flexbox justify-space-between">
																				<div class="steps-nav-title">Your Shared Skills</div>
																				<div class="steps-nav-btn">
																					<div class="btn-group step-2-btn clearfix">
																						<button type="button" class="btn btn-blue-border btn-bold step-1-toggler step-toggler">Back</button>
																						<button type="button" class="btn btn-blue btn-bold step-3-toggler step-toggler">Done</button>
																					</div>
																					<button type="button" class="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler">Add</button>
																				</div>
																			</div>
																			<div class="step-1">
																				<div class="skill-block skill-cat">
																					<div class="skill-block-title">Choose  Your Skill Category</div>
																					<div class="skill-block-list">
																						<form>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-1">
																								<label for="cat-1">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-2">
																								<label for="cat-2">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-3">
																								<label for="cat-3">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-4">
																								<label for="cat-4">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-5">
																								<label for="cat-5">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-6">
																								<label for="cat-6">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-7">
																								<label for="cat-7">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-8">
																								<label for="cat-8">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-9">
																								<label for="cat-9">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																							<div class="checkbox-block">
																								<input type="checkbox" id="cat-10">
																								<label for="cat-10">
																									<span class="checkbox-circle">
																										<span class="icon icon-check-mark"></span>
																									</span>
																									<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																								</label>
																							</div>
																						</form>
																					</div>
																					<button type="button" class="btn btn-blue btn-bold step-2-toggler step-toggler">Next</button>
																				</div>
																			</div>
																			<div class="step-2">
																				<div class="skill-subcat">
																					<div class="flexbox justify-space-between">
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
																				<div class="skill-subcat">
																					<div class="flexbox justify-space-between">
																						<div class="skill-block">
																							<div class="skill-block-title">Biology</div>
																							<div class="skill-block-list">
																								<form>
																									<div class="checkbox-block">
																										<input type="checkbox" id="biol-6">
																										<label for="biol-6">
																											<span class="checkbox-circle">
																												<span class="icon icon-check-mark"></span>
																											</span>
																											<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																										</label>
																									</div>
																									<div class="checkbox-block">
																										<input type="checkbox" id="biol-7">
																										<label for="biol-7">
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
																			<div class="step-3">
																				<div class="skill-subcat skill-subcat--item">
																					<div class="flexbox justify-space-between">
																						<div class="skill-block">
																							<div class="skill-block-title">Math &amp; Science</div>
																							<div class="skill-block-list">
																								<form>
																									<div class="checkbox-block">
																										<input type="checkbox" id="math-1" checked>
																										<label for="math-1">
																											<span class="checkbox-circle">
																												<span class="icon icon-check-mark"></span>
																											</span>
																											<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																										</label>
																									</div>
																									<div class="checkbox-block">
																										<input type="checkbox" id="math-2" checked>
																										<label for="math-2">
																											<span class="checkbox-circle">
																												<span class="icon icon-check-mark"></span>
																											</span>
																											<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																										</label>
																									</div>
																									<div class="checkbox-block">
																										<input type="checkbox" id="math-3" checked>
																										<label for="math-3">
																											<span class="checkbox-circle">
																												<span class="icon icon-check-mark"></span>
																											</span>
																											<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																										</label>
																									</div>
																									<div class="checkbox-block">
																										<input type="checkbox" id="math-4" checked>
																										<label for="math-4">
																											<span class="checkbox-circle">
																												<span class="icon icon-check-mark"></span>
																											</span>
																											<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																										</label>
																									</div>
																									<div class="checkbox-block">
																										<input type="checkbox" id="math-5" checked>
																										<label for="math-5">
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
																							<div class="skill-block-title">Skills</div>
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
																					<div class="skill-block-footer">
																						<a href="#">View More</a>
																						<a href="#">Edit</a>
																					</div>
																				</div>
																				<div class="skill-subcat skill-subcat--item">
																					<div class="flexbox justify-space-between">
																						<div class="skill-block">
																							<div class="skill-block-title">Biology</div>
																							<div class="skill-block-list">
																								<form>
																									<div class="checkbox-block">
																										<input type="checkbox" id="biol-6" checked>
																										<label for="biol-6">
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
																							<div class="skill-block-title">Skills</div>
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
																					<div class="skill-block-footer">
																						<a href="#">View More</a>
																						<a href="#">Edit</a>
																					</div>
																				</div>
																				<div class="skill-subcat skill-subcat--new">
																					<div class="skill-block-title">New Skill Category</div>
																					<div class="flexbox justify-space-between">
																						<div class="skill-block">
																							<form>
																								<div class="input-block">
																									Category
																									<input type="text" placeholder="Insert your new category here..">
																								</div>
																							</form>
																						</div>
																						<div class="skill-block">
																							<form>
																								<div class="input-block">
																									Subcategory
																									<input type="text" placeholder="Insert your new subcategory here..">
																								</div>
																							</form>
																						</div>
																						<div class="skill-sub-block">
																							<div class="skill-block-title">Skills</div>
																							<form class="form-group">
																								<input type="text" class="form-control" placeholder="Write new skill">
																								<button class="add-btn btn btn-blue">
																									<span class="icon icon-add"></span>
																								</button>
																							</form>
																							<div class="skill-tags-block clearfix">
																								<div class="skill-tag">Math</div>
																								<div class="skill-tag">Trigonometry</div>
																							</div>
																						</div>
																					</div>
																					<button type="button" class="btn btn-blue add-skill-btn">Add Skill Category</button>
																				</div>
																				<div class="skills-footer">
																					<a href="#">
																						<span class="icon icon-add btn btn-blue add-btn"></span>
																						Add Here New Teachers Skill Category
																					</a>
																				</div>
																			</div>
																		 </div>{/*<!--Skills page END --> */}
																	</div>
															</div>



                </div>
              </div>
             </div> 

          </div>
        </div>
        {/* /// */}
        




        {/* {getToken() !== false ? <LinkPage /> : <User />} */}
      </div>
    );
  }
}








function mapDispatchToProps(dispatch){
  return {
    // add: () => dispatch(addTodo())
    // userValid: (value) => dispatch(userValid(value))
  }
}

function mapStateToProps (state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
