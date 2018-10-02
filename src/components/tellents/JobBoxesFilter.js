import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {inputSearch, dataToggler} from '../../reducers/search';

class JobBoxesFilter extends React.Component {

  onClickToggle = (event) => {
      this.props.dataToggler(event.target.id);
  }

  render() { 
    return (
      <div class="panel panel-default panel-gray job-boxes-filter">
        <div class="search-filter radio-block flexbox justify-space-center" >
          <div class="radio">
            <input type="radio" name="job-boxes-filter" id="jobs-filter-2" value="jobs-filter" onClick={this.onClickToggle} checked={this.props.search.isJobs}/>
            <label for="jobs-filter-2" >
              <span class="radio-text">Jobs</span>
            </label>
          </div>
          <button type="button" id="toggle-id" class="btn radio-switcher clearfix">
            <div class="circul-shape">
              <span class="icon icon-check-mark" ></span>
            </div>
          </button>
          <div class="radio">
            <input type="radio" name="job-boxes-filter" id="talents-filter-2" value="talents-filter" onClick={this.onClickToggle} checked={this.props.search.isTellents}/>
            <label for="talents-filter-2">
              <span class="radio-text">Talents</span>
            </label>
          </div>
        </div>
    </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
      {
          inputSearch,
          dataToggler
      },
      dispatch
  );
};

function mapStateToProps (state) {
  return  {
      search:state.search
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBoxesFilter);