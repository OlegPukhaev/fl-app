import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import {jobsData, isTellents, isJobs, configJobs} from './../../selectors';
import { connect } from 'react-redux';
// import JobBoxJobsList from './JobBoxJobsList';

class JobBoxJobsList extends React.Component {
	constructor (props) {
		super(props)
    }
    
    skillTags =( item )=> {
        return <div class="skill-tag">{item.name}</div>
    }

  render() { 
    // {Reactotron.log("--->",this.props.data.skill_tags.length)}

    return (
			<div class="job-box-block">
				<div class="panel panel-default job-box">
                <div class="job-box-header flexbox justify-space-between">
                    <div class="job-box-title">
                        <div class="post-date">6 days ago</div>
                        <div class="job-title">{this.props.data.promotion_title}</div>
                    </div>
                    <div class="panel panel-default">
                        <div class="flexbox justify-space-between">
                            <div class="job-box-photo-block">
                                <div class="job-box-photo bg-cover circul-shape">
                                    <i class="notif"></i>
                                </div>
                            </div>
                            <div class="award">
                                <span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
                            </div>
                            <div class="job-box-rate">
                                <span class="icon icon-star-full"></span>
                                <span class="rate-result">5.8</span>
                            </div>
                        </div>
                        <div class="blue-color">{this.props.data.user.full_name}</div>
                    </div>
                </div>
                <div class="job-box-body">
                    <div class="job-box-tips flexbox justify-space-between">
                        <div class="tip">
                            <span class="icon icon-location"></span>
                            <span class="text">Aus..</span>
                        </div>
                        <div class="tip">
                            <span class="icon icon-clock-1"></span>
                            <span class="text">&#62; 30h</span>
                        </div>
                        <div class="tip">
                            <span class="icon icon-award"></span>
                            <span class="text">Jun</span>
                        </div>
                        <div class="tip">
                            <span class="icon icon-timer"></span>
                            <span class="text">110 h/2 J</span>
                        </div>
                        
                        <div class="tip">
                            <span class="icon icon-wallet"></span>
                            <span class="text">24$/h</span>
                        </div>
                    </div>
                    <div class="job-box-deskr">
                        <div class="text">
                        {this.props.data.promotion_description}
                            {/* Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks... */}
                        </div>
                        <div class="skill-tags-block clearfix">
                            {/* {this.props.data.skill_tags.length !== 0 && */}
                                {this.props.data.skill_tags.map(this.skillTags)}
                            {/* } */}
                        </div>
                    </div>
                </div>
                <div class="job-box-footer flexbox justify-space-between">
                    <div class="additional-info blue-color">Math  Home Tutoring</div>
                    <button class="btn btn-blue btn-bold">Free</button>
                </div>
            </div>{/* <!--job-box End--> */}
				<div class="caret-block">
                <span class="caret-top"></span>
            </div>
				<div class="panel panel-default job-box-details">
                <button class="btn btn-bg-transparent close-btn icon-btn"><span class="glyphicon glyphicon-remove"></span></button>
                <div class="flexbox justify-space-between">
                    <div class="about-block-wrapper">
                            <div class="photo-block">
                                <div class="flexbox justify-space-between">
                                    <div class="award">
                                        <span class="icon icon-badge-solid"></span>
                                    </div>
                                    <div class="job-box-photo bg-cover circul-shape">
                                    </div>
                                    <div class="job-box-rate">
                                        <span class="icon icon-star-full"></span>
                                        <span class="rate-result">5.8</span>
                                    </div>
                                </div>
                                <div class="job-box-title">
                                    <div class="job-box-name blue-color">Clifford Love</div>
                                </div>
                            </div>
                        
                        <div class="info-block">
                            <div class="title">
                                $7,832 Total Spent 
                            </div>
                        </div>
                        <div class="info-block">
                            <div class="title">
                                30  Samples  / 20 jobs
                            </div>
                        </div>
                        <div class="info-block">
                            <div class="title">
                                Languages 
                            </div>
                            <div class="text">
                                English: <span>fluent</span>;
                                Russian: <span>native</span>
                            </div>
                        </div>
                        <div class="info-block">
                            <div class="title">
                                Place of Work 
                            </div>
                            <div class="text">
                                Online
                            </div>
                        </div>
                        <div class="info-block info-block--btns">
                            <button class="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                                <div class="button-content">
                                    <span class="icon icon-clipboard"></span>
                                    <span class="btn-text">Send a bid</span>
                                </div>
                            </button>
                            <button class="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                                <div class="button-content">
                                    <span class="icon icon-output"></span>
                                    <span class="btn-text">More Info</span>
                                </div>
                            </button>
                            <button class="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                                <div class="button-content">
                                    <span class="icon icon-comment"></span>
                                    <span class="btn-text">Message</span>
                                </div>
                            </button>	
                        </div>
                    </div>
                    <div class="job-details-right">
                        <div class="job-details-right-header flexbox">
                            <div class="likes flexbox">
                                <span class="icon icon-shape"></span>
                                <ul class="likes-list list-unstyled">
                                    <li class="like-item like-item--1 bg-cover circul-shape"></li>
                                    <li class="like-item like-item--2 bg-cover circul-shape"></li>
                                    <li class="like-item like-item--3 bg-cover circul-shape"></li>
                                    <li class="like-item like-item--1 bg-cover circul-shape"></li>
                                </ul>
                            </div>
                            <div class="stat flexbox justify-space-center flex-wrap">
                                <div class="stat-block">
                                    <span class="icon icon-tag"></span>
                                    <span class="stat-title blue-color">FIXED</span>
                                    <span class="stat-info">$200</span>
                                </div>
                                <div class="stat-block">
                                    <span class="icon icon-comments"></span>
                                    <span class="stat-title blue-color">RESPONSIVE</span>
                                    <span class="stat-info">Fair</span>
                                </div>
                                <div class="stat-block">
                                    <span class="icon icon-accounts"></span>
                                    <span class="stat-title blue-color">BUDGET</span>
                                    <span class="stat-info">$1000</span>
                                </div>
                                <div class="stat-block">
                                    <span class="icon icon-clock-1"></span>
                                    <span class="stat-title blue-color">COMPLETE</span>
                                    <span class="stat-info">5</span>
                                </div>
                            </div>
                        </div>
                        <div class="job-details-right-body">
                            <div class="job-details-descr">
                                <div class="job-title">
                                    Looking for back end programmer
                                </div>
                                <div class="job-descr-text">
                                    <p>Experience Level: Expert Description of requirements/features: Looking for experts at coding in Wordpress for Mobile use.</p>
                                    <p>Must be excellent at design/frontend/backend programming in the popular programming languages. You will combine elements from our current with a modified theme site on the Wordpress platform.</p>
                                    <p>The new site will be responsive/mobile.</p>
                                    <p>The new site should load quickly and be user friendly on Mac, PC, Android phone/tablet, Apple phone/tablet and Windows phone/tablet, Chrome, IE, Windows, Opera and Firefox browsers. Once these items are complete, if things go well we will hire your company as a site administrator on an hourly basis (performing changes when required). Your company should have excellent and excellent rating and feedback. You should be able to quickly complete assignments. Please submit your website portfolio (links of sites you have created).</p>
                                    <p>Make sure all links you submit are working links (not dead links). IMPORTANT: Please DO NOT submit websites you have not created. This will disqualify you. Please be prepared to show us proof of the work you have performed on all websites you have created.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="other-details">
                            <div class="panel flexbox justify-space-between panel-blue">
                                <div class="other-title">Math  Home Tutoring</div>
                                <span class="btn btn-blue-border btn-bold">Free</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* <!--job-box End--> */}
			</div>
    );
  }
}

export default JobBoxJobsList;