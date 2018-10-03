import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class SkillCategories extends React.Component {

	render() {
		// Reactotron.log(this.props.modalWinToggler);
    return (
      <div className="form-block">
        <div className="skill-block skill-cat">
          <div className="skill-block-title">
            <div className="form-block-wrapper">
              Choose  Your Skill Category
              <span className="icon icon-down-arrow"></span>
            </div>
          </div>
          <div className="skill-block-list">
            <form className="form-block-wrapper flexbox flex-wrap">
              <div className="checkbox-block">
                <input type="checkbox" id="cat-1" />
                <label for="cat-1">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Web, Mobile &amp; Software Dev</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-2" />
                <label for="cat-2">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">IT &amp; Networking</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-3" />
                <label for="cat-3">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Data Science &amp; Analytics</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-4" />
                <label for="cat-4">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Translation</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-5" />
                <label for="cat-5">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Legal</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-6" />
                <label for="cat-6">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Admin Support</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-7" />
                <label for="cat-7">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Engineering &amp; Architecture</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-8" />
                <label for="cat-8">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Customer Service</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-9" />
                <label for="cat-9">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Design &amp; Creative</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="cat-10" />
                <label for="cat-10">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <span className="checkbox-text">Sales &amp; Marketing</span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="skill-subcat">
          <div className="flexbox justify-space-between form-block-wrapper">
            <div className="skill-block">
              <div className="skill-block-title">Math &amp; Science</div>
              <div className="skill-block-list">
                <form>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-1" />
                    <label for="math-1">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-2" />
                    <label for="math-2">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-3" />
                    <label for="math-3">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-4" />
                    <label for="math-4">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-5" />
                    <label for="math-5">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-6" />
                    <label for="math-6">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-7" />
                    <label for="math-7">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-8" />
                    <label for="math-8">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-9" />
                    <label for="math-9">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                  <div className="checkbox-block">
                    <input type="checkbox" id="math-10" />
                    <label for="math-10">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="skill-sub-block">
              <form className="form-group">
                <input type="text" className="form-control" placeholder="Write new skill" />
                <button className="add-btn btn btn-blue">
                  <span className="icon icon-add"></span>
                </button>
              </form>
              <div className="skill-tags-block clearfix">
                <div className="skill-tag">Math</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Math</div>
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
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategories)