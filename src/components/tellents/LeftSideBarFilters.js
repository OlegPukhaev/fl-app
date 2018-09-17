import React from 'react';
// import '../../App.css';

class LeftSideBarFilters extends React.Component {
  render() { 
    return (
        <div class="panel panel-default">
        <button class="btn btn-bg-transparent close-btn icon-btn"><span class="glyphicon glyphicon-remove"></span></button>
        <div class="filter-block">
            <div class="filter-title">
                Experience:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-1.1" />
                    <label for="checkbox-1.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Intern</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-1.2" />
                    <label for="checkbox-1.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Junior</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-1.3" />
                    <label for="checkbox-1.3">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Senior</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-1.4" />
                    <label for="checkbox-1.4">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Expert</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Posted:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-2.1" />
                    <label for="checkbox-2.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">24h</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-2.2" />
                    <label for="checkbox-2.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">1w</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-2.3" />
                    <label for="checkbox-2.3">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">3d </span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-2.4" />
                    <label for="checkbox-2.4">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#62; 1 W</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Place:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-3.1" />
                    <label for="checkbox-3.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">On-line</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-3.2" />
                    <label for="checkbox-3.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">On-site</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Loocation:
            </div>
            <div class="filter-dropdown-block clearfix">
                <button type="button" class="btn btn-default dropdown-toggle">
                    <div class="flexbox justify-space-between">
                        <span class="text">Country</span>
                        <span class="icon icon-down-arrow"></span>
                    </div>
                </button>
                <div class="dropdown-list">
                    <div class="caret-block">
                        <span class="caret-top"></span>
                    </div>
                    <div class="dropdown-list-wrapper">
                        <div class="checkbox-list-block">
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.1" />
                                <label for="checkbox-4.1">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">USA</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.2" />
                                <label for="checkbox-4.2">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Canada</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.3" />
                                <label for="checkbox-4.3">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Poland</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.4" />
                                <label for="checkbox-4.4">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Italia</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.5" />
                                <label for="checkbox-4.5">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">France</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.6" />
                                <label for="checkbox-4.6">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Ukraine</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.7" />
                                <label for="checkbox-4.7">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Turkey</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.8" />
                                <label for="checkbox-4.8">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Italia</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.9" />
                                <label for="checkbox-4.9">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">France</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.10" />
                                <label for="checkbox-4.10">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Ukraine</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-4.11" />
                                <label for="checkbox-4.11">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Turkey</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Languages:
            </div>
            <div class="filter-dropdown-block clearfix">
                <button type="button" class="btn btn-default dropdown-toggle">
                    <div class="flexbox justify-space-between">
                        <span class="text">Languages</span>
                        <span class="icon icon-down-arrow"></span>
                    </div>
                </button>
                <div class="dropdown-list">
                    <div class="caret-block">
                        <span class="caret-top"></span>
                    </div>
                    <div class="dropdown-list-wrapper">
                        <div class="checkbox-list-block">
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.1" />
                                <label for="checkbox-5.1">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">English</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.2" />
                                <label for="checkbox-5.2">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Russian</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.3" />
                                <label for="checkbox-5.3">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Poland</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.4" />
                                <label for="checkbox-5.4">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Italia</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.5" />
                                <label for="checkbox-5.5">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Franch</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.6" />
                                <label for="checkbox-5.6">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Ukrainien</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.7" />
                                <label for="checkbox-5.7">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Turkey</span>
                                </label>
                            </div>
                            <div class="checkbox-block">
                                <input type="checkbox" id="checkbox-5.8" />
                                <label for="checkbox-5.8">
                                    <span class="filter-checkbox">
                                        <span class="icon icon-check-mark"></span>
                                    </span>
                                    <span class="checkbox-text">Italien</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Availability:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-6.1" />
                    <label for="checkbox-6.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#60; 20 h</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-6.2" />
                    <label for="checkbox-6.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#62;  30 h</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-6.3" />
                    <label for="checkbox-6.3">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">30 h</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-6.4" />
                    <label for="checkbox-6.4">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Full-time</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Payment:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-7.1" />
                    <label for="checkbox-7.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Fixed</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-7.2" />
                    <label for="checkbox-7.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Hourly</span>
                    </label>
                </div>
            </div>
            <div class="filter-inputs flexbox justify-space-between">
                <input type="text" value="0" class="form-control" /> 
                <span>to</span>
                <input type="text" value="$20" class="form-control" />
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Budget:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-8.1" />
                    <label for="checkbox-8.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Not defined</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-8.2" />
                    <label for="checkbox-8.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#60;$100</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-8.3" />
                    <label for="checkbox-8.3">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#60;$1000</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-8.4" />
                    <label for="checkbox-8.4">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#60;$300</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-8.5" />
                    <label for="checkbox-8.5">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#62;$1000</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Proposals:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-9.1" />
                    <label for="checkbox-9.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">none</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-9.2" />
                    <label for="checkbox-9.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#60;20</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-9.3" />
                    <label for="checkbox-9.3">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#60;5</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-9.4" />
                    <label for="checkbox-9.4">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#62;20</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-9.5" />
                    <label for="checkbox-9.5">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">&#60;10</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Job Delivery:
            </div>
            <div class="checkbox-list-block clearfix">
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-10.1" />
                    <label for="checkbox-10.1">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Not defined</span>
                    </label>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="checkbox-10.2" />
                    <label for="checkbox-10.2">
                        <span class="filter-checkbox">
                            <span class="icon icon-check-mark"></span>
                        </span>
                        <span class="checkbox-text">Less 1W</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default LeftSideBarFilters;