import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class PaymentDetails extends React.Component {

	render() {
		// Reactotron.log(this.props.modalWinToggler);
    return (
	
      <div className="form-block">
        <div className="form-block-wrapper flexbox justify-space-between">
          <div className="form-block-section">
            <div className="form-block-header">
              <div className="form-block-title">
                Job Payment
              </div>
            </div>
            <div className="radio-block">
              <div className="radio">
                <input type="radio" name="job-payment" id="fixed-payment" value="fixed-payment" checked="" />
                <label for="fixed-payment">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Fixed Price</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="job-payment" id="hourly-payment" value="hourly-payment" />
                <label for="hourly-payment">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Hourly</span>
                  <span className="job-payment-input-wrapper">
                    <input type="text" value="20" className="form-control" />
                    $ / hour
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-block-section">
            <div className="form-block-header">
              <div className="form-block-title">
                Job Price
              </div>
            </div>
            <div className="job-price-input-wrapper">
              <input className="form-control" type="text" value="500" /> $
              <p className="small">Enter here how much you think it should cost you..</p>
            </div>
          </div>
        </div>
        <div className="form-block-wrapper">
          <div className="form-block-section job-time-block col-100">
            <div className="form-block-header">
              <div className="form-block-title">
                Estimated time to complete the Job
              </div>
            </div>
            <div className="btn-group">
              <button className="btn btn-bg-transparent">
                <div className="my-select-box">
                    <span className="my-select-result">
                      <span className="text">3</span> 
                      <span className="caret"></span>
                    </span>
                    <div className="my-select-options">
                      <div className="radio-block">
                      <div className="radio">
                        <input type="radio" name="numb-options" id="1-term" value="1-term" checked="" />
                        <label for="1-term">
                          <span className="radio-text">1</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="2-term" value="2-term" checked="" />
                        <label for="2-term">
                          <span className="radio-text">2</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="3-term" value="3-term" checked="" />
                        <label for="3-term">
                          <span className="radio-text">3</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="4-term" value="4-term" checked="" />
                        <label for="4-term">
                          <span className="radio-text">4</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="5-term" value="5-term" checked="" />
                        <label for="5-term">
                          <span className="radio-text">5</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="6-term" value="6-term" checked="" />
                        <label for="6-term">
                          <span className="radio-text">6</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="7-term" value="7-term" checked="" />
                        <label for="7-term">
                          <span className="radio-text">7</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="8-term" value="8-term" checked="" />
                        <label for="8-term">
                          <span className="radio-text">8</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="9-term" value="9-term" checked="" />
                        <label for="9-term">
                          <span className="radio-text">9</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="10-term" value="10-term" />
                        <label for="10-term">
                          <span className="radio-text">10</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="11-term" value="11-term" />
                        <label for="11-term">
                          <span className="radio-text"> 11</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="numb-options" id="12-term" value="12-term" />
                        <label for="12-term">
                          <span className="radio-text">12</span>
                        </label>
                      </div>
                    </div>	
                    </div>
                  </div>
                </button>
              <button className="btn btn-bg-transparent" >
                <div className="my-select-box">
                    <span className="my-select-result">
                      <span className="text">Week</span> 
                      <span className="caret"></span>
                    </span>
                    <div className="my-select-options">
                      <div className="radio-block">
                      <div className="radio">
                        <input type="radio" name="period-options" id="d-term" value="d-term" checked="" />
                        <label for="d-term">
                          <span className="radio-text">Day</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period-options" id="w-term" value="w-term" />
                        <label for="w-term">
                          <span className="radio-text">Week</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period-options" id="m-term" value="m-term" />
                        <label for="m-term">
                          <span className="radio-text"> Month</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period-options" id="y-term" value="y-term" />
                        <label for="y-term">
                          <span className="radio-text">Year</span>
                        </label>
                      </div>
                    </div>	
                    </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="form-block-wrapper flexbox justify-space-between">
          <div className="form-block-section col-30">
            <div className="form-block-header">
              <div className="form-block-title">
                Talent Commitment
              </div>
            </div>
            <div className="radio-block">
              <div className="radio">
                <input type="radio" name="commitment-option" id="later" value="later" checked="" />
                <label for="later">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">I will Decide Later</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="commitment-option" id="10hrs" value="10hrs" />
                <label for="10hrs">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">10 hrs per week</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="commitment-option" id="30hrs" value="30hrs" />
                <label for="30hrs">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Up to 30 hrs per week</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="commitment-option" id="30morehrs" value="30morehrs" />
                <label for="30morehrs">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">More than 30 hrs per week</span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-block-section">
            <div className="form-block-header">
              <div className="form-block-title">
                Talent Level
              </div>
            </div>
            <div className="radio-block">
              <div className="radio">
                <input type="radio" name="lavel-otion" id="level-int" value="level-int" checked="" />
                <label for="level-int">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Intern</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="lavel-otion" id="level-jun" value="level-jun" />
                <label for="level-jun">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Junior</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="lavel-otion" id="level-sen" value="level-sen" />
                <label for="level-sen">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Senior</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="lavel-otion" id="level-exp" value="level-exp" />
                <label for="level-exp">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Expert</span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-block-section col-30">
            <div className="form-block-header">
              <div className="form-block-title">
                How Many Talents Do you want to try
              </div>
            </div>
            <div className="radio-block">
              <div className="radio">
                <input type="radio" name="quantity-option" id="quantity-1" value="quantity-1" checked="" />
                <label for="quantity-1">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">1</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="quantity-option" id="quantity-3" value="quantity-3" />
                <label for="quantity-3">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">3</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="quantity-option" id="quantity-5" value="quantity-5" />
                <label for="quantity-5">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">5</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="quantity-option" id="quantity-infinity" value="quantity-infinity" />
                <label for="quantity-infinity">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">As many as will be</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-block-wrapper">
          <div className="form-block-section col-100">
            <div className="form-block-header">
              <div className="form-block-title">
                Contract General Notes
              </div>
            </div>
            <div>
              <textarea className="form-control comments-area" placeholder="Enter here Comments for the contract"></textarea>
            </div>
          </div>
        </div>
        <div className="form-block-wrapper">
          <div className="form-block-section finish-block col-100">
            <div className="form-block-header">
              <div className="form-block-title">
                Finish
              </div>
            </div>
            <div className="checkbox-block">
              <input type="checkbox" id="terms-agree" />
              <label for="terms-agree">
                <span className="checkbox-circle">
                  <span className="icon icon-check-mark"></span>
                </span>
                <span className="checkbox-text">I agree for the terms of use</span>
              </label>
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
				winToggler
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			modalWinToggler:modalWinToggler(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails)