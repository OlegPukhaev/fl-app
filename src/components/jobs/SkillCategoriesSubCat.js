import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler, getSkillCategories} from './../../reducers/jobs';
import {fetchSkillsCatJobPost} from './../../functions/api';
import {modalWinToggler, skillsCategory, skillConfig,  activeSkillId} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');

class SkillCategoriesSubCat extends React.Component {
  constructor (props) {
    super(props);
  }

  selectSubCat = (event) => {
    // alert(event.target.id);
  }

  getSubCatList = (item, index) => {
    return (
      <div className="checkbox-block" key={`subcat-${index}`}>
        <input type="checkbox" id={item.id} onClick={this.selectSubCat}/>
        <label for={item.id}>
          <span className="checkbox-circle">
            <span className="icon icon-check-mark"></span>
          </span>
          <span className="checkbox-text">{item.name}</span>
        </label>
      </div>
    );
  }

render() {
    return (
      <div className="skill-subcat">
        <div className="flexbox justify-space-between form-block-wrapper">
          <div className="skill-block">
          
            <div className="skill-block-title">
              {this.props.config.category[this.props.activeSkillId-1].name}
            </div>
            
            <div className="skill-block-list">
              <form>

                {/* <div className="checkbox-block">
                  <input type="checkbox" id="math-1" />
                  <label for="math-1">
                    <span className="checkbox-circle">
                      <span className="icon icon-check-mark"></span>
                    </span>
                    <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                  </label>
                </div> */}
                  {this.props.config.category[this.props.activeSkillId-1].skill_categories.map(this.getSubCatList)}
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
      config:skillConfig(state),
      activeSkillId:activeSkillId(state)

		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(SkillCategoriesSubCat)