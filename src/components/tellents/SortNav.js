import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getData } from '../functions/api';
import {inputSearch, inputSearchJobs, getTellentsData, getJobsData} from '../../reducers/search';
import { isJobs, isTellents, configJobs, configTellents } from "./../../selectors";
import {fetchTellentsData,fetchJobsData} from '../../functions/api';
import {getRequest, getRequestJobs} from '../../functions/function'
const queryString = require('query-string');

class SortNav extends React.Component {

  render() { 
    return (
	 

      <div class="sort-nav">
      <span class="sort-nav-title">Sort By</span>
      <button type="button" class="btn">
        <div class="my-select-box">
          <span class="my-select-result">
            <span class="text">Relevance</span> 
            <span class="icon icon-down-arrow"></span>
          </span>
          <div class="my-select-options">
            <div class="caret-block">
              <span class="caret-top"></span>
            </div>
            <div class="radio-block">
              <div class="radio">
                <input type="radio" name="jobs-sort-option" id="jobs-sort-option-1" value="jobs-sort-option-1" checked="" />
                <label for="jobs-sort-option-1">
                  <span class="check-mark icon icon-check-mark"></span>
                  <span class="radio-text">Relevance</span>
                </label>
              </div>
              <div class="radio">
                <input type="radio" name="jobs-sort-option" id="jobs-sort-option-2" value="jobs-sort-option-2" />
                <label for="jobs-sort-option-2">
                  <span class="check-mark icon icon-check-mark"></span>
                  <span class="radio-text">Date</span>
                </label>
              </div>
              <div class="radio">
                <input type="radio" name="jobs-sort-option" id="jobs-sort-option-3" value="jobs-sort-option-3" />
                <label for="jobs-sort-option-3">
                  <span class="check-mark icon icon-check-mark"></span>
                  <span class="radio-text">Rate</span>
                </label>
              </div>
              <div class="radio">
                <input type="radio" name="jobs-sort-option" id="jobs-sort-option-4" value="jobs-sort-option-4" />
                <label for="jobs-sort-option-4">
                  <span class="check-mark icon icon-check-mark"></span>
                  <span class="radio-text">Alfabet</span>
                </label>
              </div>
            </div>	
          </div>
        </div>
      </button>
      <span class="sort-result">
        Result: 
        <span class="sort-result-numb">
           {/* {this.props.jobsData!==null ? this.props.jobsData.meta.total_count : "No Data"} */}
           {this.props.totalCount}
        </span>

      </span>
    </div>

   
    );
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
			{
				inputSearch,
				inputSearchJobs,
				getTellentsData,
				getJobsData,
			},
			dispatch
    );
 };

function mapStateToProps (state) {
    return  {
				// search:state.search,
				isJobs:isJobs(state),
				isTellents:isTellents(state),
				configJobs: configJobs(state),
				configTellents: configTellents(state)

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SortNav);