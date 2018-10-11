import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addPaymentDetails} from './../../reducers/jobs';

class PaymentDetails extends React.Component {
  state = {
    payment:null,
    hourly_price_disabled:false,
    
    price:null,//Job Price
    hourly_price:null,//Hourly Price

    period: null,
    period_type: null,

    commitment:null,
    level:null,
    time_type:null,
    contract_general_notes:null,
    terms_agree:false
  }

  onPaymentClick = (e) => {
    this.setState({payment:e.target.value});
    if (e.target.value === "fixed_price") {
      this.setState({
        hourly_price_disabled:true,
        hourly_price:null
      });
      this.props.addPaymentDetails(this.state);
     } else {
       this.setState({hourly_price_disabled:false});
     }
  }
  onPriceChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    this.props.addPaymentDetails(this.state);
  } 
  onChangeSelected = (e) => {
    this.setState({[e.target.name] : e.target.value});
    this.props.addPaymentDetails(this.state);
  }

  setTermsAgree = () => {
    if (this.state.terms_agree === false) {
      this.setState({terms_agree:true});
      this.props.addPaymentDetails(this.state);

    } else {
      this.setState({terms_agree:false});
      this.props.addPaymentDetails(this.state);
    }
    
  }

	render() {
    const {payment , hourly_price, hourly_price_disabled, price, period, period_type, commitment, level, time_type, contract_general_notes, terms_agree} = this.state;

    // Reactotron.warn(this.state);
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
                <input 
                  type="radio"
                  name="job-payment" 
                  id="fixed-payment" 
                  value="fixed_price" 
                  onClick={this.onPaymentClick}
                />
                <label for="fixed-payment">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Fixed Price</span>
                </label>
              </div>
              <div className="radio">
                <input 
                  type="radio" 
                  name="job-payment" 
                  id="hourly-payment" 
                  value="hourly" 
                  onClick={this.onPaymentClick}
                />
                <label for="hourly-payment">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Hourly</span>
                  <span className="job-payment-input-wrapper">
                    <input 
                      type="text" 
                      name="hourly_price"
                      value={hourly_price}
                      className="form-control" 
                      onChange={this.onPriceChange}
                      disabled={hourly_price_disabled}
                    />
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
              <input 
                className="form-control" 
                name="price"
                type="text" 
                value={price} 
                onChange={this.onPriceChange}
              /> $
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
                      <span className="text">1</span> 
                      <span className="caret"></span>
                    </span>
                    <div className="my-select-options">
                      <div className="radio-block">

                      <div className="radio">
                        <input type="radio" name="period" id="2-term" value="1" onChange={this.onChangeSelected}/>
                        <label for="2-term">
                          <span className="radio-text">1</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="2-term" value="2" onChange={this.onChangeSelected}/>
                        <label for="2-term">
                          <span className="radio-text">2</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="3-term" value="3" onChange={this.onChangeSelected}/>
                        <label for="3-term">
                          <span className="radio-text">3</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="4-term" value="4" onChange={this.onChangeSelected}/>
                        <label for="4-term">
                          <span className="radio-text">4</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="5-term" value="5" onChange={this.onChangeSelected}/>
                        <label for="5-term">
                          <span className="radio-text">5</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="6-term" value="6" onChange={this.onChangeSelected}/>
                        <label for="6-term">
                          <span className="radio-text">6</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="7-term" value="7" onChange={this.onChangeSelected}/>
                        <label for="7-term">
                          <span className="radio-text">7</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="8-term" value="8" onChange={this.onChangeSelected}/>
                        <label for="8-term">
                          <span className="radio-text">8</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="9-term" value="9" onChange={this.onChangeSelected}/>
                        <label for="9-term">
                          <span className="radio-text">9</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="10-term" value="10" onChange={this.onChangeSelected}/>
                        <label for="10-term">
                          <span className="radio-text">10</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="11-term" value="11" onChange={this.onChangeSelected}/>
                        <label for="11-term">
                          <span className="radio-text"> 11</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period" id="12-term" value="12" onChange={this.onChangeSelected}/>
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
                        <input type="radio" name="period_type" id="d-term" value="day" onChange={this.onChangeSelected}/>
                        <label for="d-term">
                          <span className="radio-text">Day</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period_type" id="w-term" value="week" onChange={this.onChangeSelected}/>
                        <label for="w-term">
                          <span className="radio-text">Week</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period_type" id="m-term" value="month" onChange={this.onChangeSelected}/>
                        <label for="m-term">
                          <span className="radio-text"> Month</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="period_type" id="y-term" value="year" onChange={this.onChangeSelected}/>
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
                <input type="radio" name="commitment" id="later" value="decide_later" onChange={this.onChangeSelected} />
                <label for="later">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">I will Decide Later</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="commitment" id="10hrs" value="per_week_10" onChange={this.onChangeSelected} />
                <label for="10hrs">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">10 hrs per week</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="commitment" id="30hrs" value="per_week_up_to_30" onChange={this.onChangeSelected} />
                <label for="30hrs">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Up to 30 hrs per week</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="commitment" id="30morehrs" value="per_week_more_than_30" onChange={this.onChangeSelected} />
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
                <input type="radio" name="level" id="level-int" value="intern" onChange={this.onChangeSelected} />
                <label for="level-int">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Intern</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="level" id="level-jun" value="junior" onChange={this.onChangeSelected}/>
                <label for="level-jun">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Junior</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="level" id="level-sen" value="senior" onChange={this.onChangeSelected} />
                <label for="level-sen">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">Senior</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="level" id="level-exp" value="expert" onChange={this.onChangeSelected} />
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
                <input type="radio" name="time_type" id="quantity-1" value="one_time" onChange={this.onChangeSelected} />
                <label for="quantity-1">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">1</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="time_type" id="quantity-3" value="long_term" onChange={this.onChangeSelected} />
                <label for="quantity-3">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">3</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="time_type" id="quantity-5" value="short" onChange={this.onChangeSelected} />
                <label for="quantity-5">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="radio-text">5</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="time_type" id="quantity-infinity" value="not_sure" onChange={this.onChangeSelected} />
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
              <textarea name="contract_general_notes" className="form-control comments-area" placeholder="Enter here Comments for the contract" value={contract_general_notes} onChange={this.onChangeSelected}>{contract_general_notes}</textarea>
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
              <input type="checkbox" id="terms-agree" name="terms_agree" checked={terms_agree} onClick={this.setTermsAgree}/>
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
        addPaymentDetails
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails)