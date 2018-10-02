import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getData } from '../functions/api';
import {inputSearch, inputSearchJobs, getTellentsData, getJobsData, sortFilter} from '../../reducers/search';
import { isJobs, isTellents, configJobs, configTellents, jobsData, tellentsData } from "./../../selectors";
import {fetchTellentsData, fetchJobsData} from '../../functions/api';
import {successMessage, warningMessage} from '../../functions/function';
import {getRequest, getRequestJobs} from '../../functions/function'
const queryString = require('query-string');

class SortNav extends React.Component {

  getTotalCount = () => {
    if ((this.props.isJobs  === true) && (this.props.jobsData !== null)) {
        return " "+this.props.jobsData.meta.total_count;
    }
    if ((this.props.isTellents  === true) && (this.props.tellentsData !== null)) {
        return " "+this.props.tellentsData.meta.total_count;
    }
  }

  getRequestTellent = () => {
    var StringifyQ = queryString.stringify({
            q: JSON.stringify(getRequest(this.props.configTellents))
    });
		fetchTellentsData(StringifyQ).then(apiData => {
      if (apiData !== "error") {
        this.props.getTellentsData(apiData.data);
        Reactotron.log("from server", apiData.data);
      } else warningMessage("Server Error!!!");
    });
  }

  getRequestJobs = () => {
    var StringifyQ = queryString.stringify({
      q: JSON.stringify(getRequestJobs(this.props.configJobs))
    });
    fetchJobsData(StringifyQ).then(apiData => {
      if (apiData !== "error") {
        this.props.getJobsData(apiData.data);
        Reactotron.log("from server", apiData.data);
      } else warningMessage("Server Error!!!");
    });      
  }

  onChangeSort = (event) => {
    alert(event.target.name);

    // Reactotron.log(event.target.name);
    this.props.sortFilter(event.target.name);
    if (this.props.isJobs) {
      this.getRequestJobs();
    }
    if (this.props.isTellents) {
      this.getRequestTellent();
    }
  }

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
                <input type="radio" name="relevance" id="jobs-sort-option-1" value="jobs-sort-option-1" checked="true" onClick={this.onChangeSort}/>
                <label for="jobs-sort-option-1">
                  <span class="check-mark icon icon-check-mark"></span>
                  <span class="radio-text">Relevance</span>
                </label>
              </div>
              <div class="radio">
                <input type="radio" name="saved" id="jobs-sort-option-2" value="jobs-sort-option-2" onClick={this.onChangeSort}/>
                <label for="jobs-sort-option-2">
                  <span class="check-mark icon icon-check-mark"></span>
                  <span class="radio-text">Date</span>
                </label>
              </div>
              <div class="radio">
                <input type="radio" name="rate" id="jobs-sort-option-3" value="jobs-sort-option-3" onClick={this.onChangeSort}/>
                <label for="jobs-sort-option-3">
                  <span class="check-mark icon icon-check-mark"></span>
                  <span class="radio-text">Rate</span>
                </label>
              </div>
              <div class="radio">
                <input type="radio" name="hired" id="jobs-sort-option-4" value="jobs-sort-option-4" onClick={this.onChangeSort}/>
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
           {this.getTotalCount()}
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
        sortFilter
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
        configTellents: configTellents(state),
        jobsData:jobsData(state),
        tellentsData:tellentsData(state),

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SortNav);