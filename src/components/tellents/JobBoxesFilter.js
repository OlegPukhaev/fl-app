import React from 'react';
// import '../../App.css';

class JobBoxesFilter extends React.Component {
  render() { 
    return (
      <div class="panel panel-default panel-gray job-boxes-filter">
        <div class="search-filter radio-block flexbox justify-space-center">
          <div class="radio">
            <input type="radio" name="job-boxes-filter" id="jobs-filter-2" value="jobs-filter" checked />
            <label for="jobs-filter-2">
              <span class="radio-text">Jobs</span>
            </label>
          </div>
          <button type="button" class="btn radio-switcher clearfix">
            <div class="circul-shape">
              <span class="icon icon-check-mark"></span>
            </div>
          </button>
          <div class="radio">
            <input type="radio" name="job-boxes-filter" id="talents-filter-2" value="talents-filter" />
            <label for="talents-filter-2">
              <span class="radio-text">Talents</span>
            </label>
          </div>
        </div>
    </div>

    );
  }
}

export default JobBoxesFilter;