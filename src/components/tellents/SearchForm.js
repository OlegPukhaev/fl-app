import React from 'react';
// import '../../App.css';

class SearchForm extends React.Component {
  render() { 
    return (
        <div class="search-form">
        <form class="my-search-form" role="search">
            <input type="text" class="form-control" placeholder="Search" />
            <div class="search-filter radio-block">
                <div class="radio">
                    <input type="radio" name="optionsRadios" id="option-jobs" value="option1" checked />
                    <label for="option-jobs">
                        <span class="radio-text">Jobs</span>
                    </label>
                </div>
                <div class="radio">
                    <input type="radio" name="optionsRadios" id="option-talents" value="option2" />
                    <label for="option-talents">
                        <span class="radio-text">Talents</span>
                    </label>
                </div>
            </div>
            <a href="" type="submit" class="btn-search"><i class="icon icon-loupe"></i></a>
        </form>
    </div>
    );
  }
}

export default SearchForm;