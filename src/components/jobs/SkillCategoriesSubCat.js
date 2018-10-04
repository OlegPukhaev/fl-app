import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, getSkillCategories} from './../../reducers/jobs';
import {fetchSkillsCatJobPost} from './../../functions/api';
import {modalWinToggler, skillsCategory} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class SkillCategoriesSubCat extends React.Component {
  constructor (props) {
    super(props);
  }


render() {
    return (
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
    );
  }
}

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{

			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {

		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategoriesSubCat)