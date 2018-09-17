import React from 'react';
// import '../../App.css';

class JobBoxTellent extends React.Component {
  render() { 
    return (
        <div class="job-box-block">
        <div class="panel panel-default job-box awarded">
            <div class="job-box-header flexbox justify-space-between">
                <div class="job-box-photo-block">
                    <div class="job-box-photo bg-cover circul-shape">
                        <i class="notif"></i>
                        <i class="award">
                            <span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
                        </i>
                    </div>
                </div>
                <div class="job-box-title">
                    <div class="job-box-name blue-color">Clifford Love</div>
                    <div class="job-box-prof">JUNIOR / UI Designer</div>
                </div>
                <div class="job-box-rate">
                    <span class="icon icon-star-full"></span>
                    <span class="rate-result">5.8</span>
                </div>
            </div>
            <div class="job-box-body flexbox justify-space-between">
                <div class="job-box-tips">
                    <div class="tip">
                          <span class="icon icon-award"></span>
                          <span class="text">95%</span>
                      </div>
                      <div class="tip">
                          <span class="icon icon-jobs"></span>
                          <span class="text">110 h/2 J</span>
                      </div>
                      <div class="tip">
                          <span class="icon icon-location"></span>
                          <span class="text">Aus..</span>
                      </div>
                      <div class="tip">
                          <span class="icon icon-clock-1"></span>
                          <span class="text">&#62; 30h</span>
                      </div>
                      <div class="tip">
                          <span class="icon icon-wallet"></span>
                          <span class="text">24$/h</span>
                      </div>
                </div>
                <div class="job-box-deskr">
                    <div class="text">
                        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus ...
                    </div>
                    <div class="skill-tags-block clearfix">
                        <div class="skill-tag">Math</div>
                        <div class="skill-tag">Trigonometry</div>
                        <div class="skill-tag">Calculus</div>
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
                        <div class="job-box-photo bg-cover circul-shape">
                        </div>
                        <div class="job-box-title">
                            <div class="job-box-name blue-color">Clifford Love</div>
                            <div class="job-box-prof">JUNIOR / UI Designer</div>
                        </div>
                    </div>
                    <div class="progress-box">
                        <div class="progress-info">
                            <span class="progress-perc">90%</span> job success
                        </div>
                        <a href="#" class="progress-title">
                            <div class="progress">
                                {/* <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> */}
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="info-block">
                        <div class="title">
                            Available 
                        </div>
                        <div class="text">
                            more then 30 hours/week
                        </div>
                    </div>
                    <div class="info-block">
                        <div class="text">
                            540  hrs / 10 jobs
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
                                <span class="btn-text">Hire</span>
                            </div>
                        </button>
                        <button class="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                            <div class="button-content">
                                <span class="icon icon-jobs"></span>
                                <span class="btn-text">Portfolio</span>
                            </div>
                        </button>
                        <button class="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                            <div class="button-content">
                                <span class="icon icon-output"></span>
                                <span class="btn-text">View Page</span>
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
                                <span class="icon icon-comments"></span>
                                <span class="stat-title blue-color">RESPONSIVE</span>
                                <span class="stat-info">Fair</span>
                            </div>
                            <div class="stat-block">
                                <span class="icon icon-calendar2"></span>
                                <span class="stat-title blue-color">LAST ACTIVE</span>
                                <span class="stat-info">1 year ago</span>
                            </div>
                            <div class="stat-block">
                                <span class="icon icon-saved"></span>
                                <span class="stat-title blue-color">SAVED</span>
                                <span class="stat-info">5</span>
                            </div>
                        </div>
                    </div>
                    <div class="job-details-right-body">

                        <div class="feedback-item flexbox">
                            <div class="left-col">
                                <div class="item-header">
                                    <div class="item-photo circul-shape bg-cover item-photo--1"></div>
                                    <div class="item-name blue-color">Clifford Love</div>
                                </div>
                                <div class="item-message">
                                    <span class="job-title">PSD to HTML</span>
                                    <span class="feedback-text"> Another bang up job! Clifford is the most dependable web design resource I've worked with, and I've worked with... many!</span>
                                </div>
                            </div>
                            <div class="right-col job-box-rate">
                                <span class="icon icon-star-full"></span>
                                <span class="rate-result">5.8</span>
                            </div>
                        </div>

                        <div class="feedback-item flexbox">
                            <div class="left-col">
                                <div class="item-header">
                                    <div class="item-photo circul-shape bg-cover item-photo--2"></div>
                                    <div class="item-name blue-color">Clifford Love</div>
                                </div>
                                <div class="item-message">
                                    <span class="job-title">PSD to HTML</span>
                                    <span class="feedback-text"> Another bang up job! Clifford is the most dependable web design resource I've worked with, and I've worked with... many!</span>
                                </div>
                            </div>
                            <div class="right-col job-box-rate">
                                <span class="icon icon-star-full"></span>
                                <span class="rate-result">5.8</span>
                            </div>
                        </div>

                        <div class="feedback-item flexbox">
                            <div class="left-col">
                                <div class="item-header">
                                    <div class="item-photo circul-shape bg-cover item-photo--3"></div>
                                    <div class="item-name blue-color">Clifford Love</div>
                                </div>
                                <div class="item-message">
                                    <span class="job-title">PSD to HTML</span>
                                    <span class="feedback-text"> Another bang up job! Clifford is the most dependable web design resource I've worked with, and I've worked with... many!</span>
                                </div>
                            </div>
                            <div class="right-col job-box-rate">
                                <span class="icon icon-star-full"></span>
                                <span class="rate-result">5.8</span>
                            </div>
                        </div>

                        <button class="btn btn-bg-transparent more-feedbacks" type="bytton">+ 10 feedbacks</button>

                    </div>
                    <div class="other-details">
                        <div class="panel flexbox justify-space-between panel-blue">
                            <div class="other-title">Math  Home Tutoring</div>
                            <span class="btn btn-blue-border btn-bold">Free</span>
                        </div>
                        <div class="panel flexbox justify-space-between panel-orange">
                            <div class="other-title">Math  Home Tutoring</div>
                            <span class="btn btn-blue-border btn-bold">Free</span>
                        </div>
                        <div class="panel flexbox justify-space-between panel-pink">
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

export default JobBoxTellent;