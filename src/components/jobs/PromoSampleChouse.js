import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectChousePromo, setCategoryCheked} from './../../reducers/jobs';
import {chooseIsChecked, defautlPromotions, promCatName, listToggler,skillConfig} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';
import PromoSampleNew from './PromoSampleNew';

class PromoSampleChouse extends React.Component {

  selectCheckbox = () => {
    this.props.selectChousePromo();
  }


  selectCategory = (event) => {
    this.props.setCategoryCheked(event.target.id);
  }

  categoriesList = (item , index) => {

      return (
        <div class="radio">
          <label>
            <span class="radio-text">{item.name}</span>
            <input type="radio" name="numb-options" id={item.id} value={item.name} onChange={this.selectCategory}/>
          </label>
        </div>
    )
  }

	render() {
    return (
          <div className="radio-block">
            <div className="radio">
              <input type="radio" name="promo-sample" id="promo-ch" value="promo-ch" checked={this.props.chooseIsChecked} onClick={this.selectCheckbox}/>
              <label htmlFor="promo-ch">
                <span className="checkbox-sqw">
                  <span className="icon icon-check-mark"></span>
                </span>
                <span className="radio-text">or choose existing skill test</span>
              </label>
            </div>
            
            <div className="promo-block-form">
              <div className="promo-block-form-header flexbox justify-space-between">
                <div className="filter-nav flexbox justify-space-between">
                
                  <div class="my-select-box form-control">
                    <span class="my-select-result flexbox justify-space-between">
                      <span class="text">{this.props.promCatName}</span> 
                      <span class="caret"></span>
                    </span>
                          <div class="my-select-options">
                            <div class="radio-block">
                              {this.props.config.promotion !== null && this.props.config.promotion.categories.map(this.categoriesList)}
                            </div>	
                          </div>


                  </div>

                  <div className="my-select-box form-control">
                    <span className="my-select-result flexbox justify-space-between">
                      <span className="text">Sub Category</span> 
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
                      </div>	
                    </div>
                  </div>


                </div>


                <div className="results-numb">
                  <span className="numb">12</span> results
                </div>
              </div>

              
              <div className="promo-block-form-body">
                <div className="checkbox-block">
                  <input type="checkbox" id="skill-test-1" />
                  <label for="skill-test-1">
                    <div className="panel-block flexbox">
                      <span className="checkbox-circle checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <div className="panel-wrapper">
                        <div className="panel panel-blue">
                          <div className="panel-title flexbox justify-space-between">
                            <span>Math  Home Tutoring</span>
                            <span className="btn btn-blue-border btn-bold">Free</span>
                          </div>
                          <div className="panel-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="skill-test-2" />
                  <label for="skill-test-2">
                    <div className="panel-block flexbox">
                      <span className="checkbox-circle checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <div className="panel-wrapper">
                        <div className="panel panel-orange">
                          <div className="panel-title flexbox justify-space-between">
                            <span>Math  Home Tutoring</span>
                            <span className="btn btn-blue-border btn-bold">Free</span>
                          </div>
                          <div className="panel-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="skill-test-3" />
                  <label for="skill-test-3">
                    <div className="panel-block flexbox">
                      <span className="checkbox-circle checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <div className="panel-wrapper">
                        <div className="panel panel-pink">
                          <div className="panel-title flexbox justify-space-between">
                            <span>Math  Home Tutoring</span>
                            <span className="btn btn-blue-border btn-bold">Free</span>
                          </div>
                          <div className="panel-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {/* <button className="btn btn-bold btn-blue">Add Promotion</button> */}
          </div>
    
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
        selectChousePromo,
        setCategoryCheked
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
      chooseIsChecked:chooseIsChecked(state),
      promotion:defautlPromotions(state),
      promCatName:promCatName(state),
      listToggler:listToggler(state),
      config:skillConfig(state)

		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PromoSampleChouse)