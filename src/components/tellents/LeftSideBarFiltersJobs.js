import Reactotron from 'reactotron-react-js';
import React from 'react';
import {getRequestJobs} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getData} from './../../functions/api'
import {getJobsData, getCountriesJobs, getLanguageJobs, selectExpJobs, selectPostJobs, selectPlaceJobs, selectAvlJobs, selectLangJobs, selectLocJobs} from './../../reducers/search'
const queryString = require('query-string');

// import '../../App.css';

class LeftSideBarFiltersJobs extends React.Component {
	// constructor (){
	// 	super();
	// }
  componentDidMount() {
		getData('/api/v1/misc/countries').then(apiData => {
			this.props.getCountriesJobs(apiData.data);
		});
		getData('/api/v1/misc/get_languages').then(apiData => {
			this.props.getLanguageJobs(apiData.data);
		});
		}
    onClickSelectJobs = (event) => {
        Reactotron.log(event.target.id, event.target.name);
          switch (event.target.name){
              case 'exp':
                  this.props.selectExpJobs(event.target.id);
              case 'post':
                  this.props.selectPostJobs(event.target.id);
              case 'place':
                  this.props.selectPlaceJobs(event.target.id);
                case 'lang':
                  this.props.selectLangJobs(event.target.id);
                  case 'loc':
                  this.props.selectLocJobs(event.target.id);
              case 'avl':
                  this.props.selectAvlJobs(event.target.id);
                }
                
                var StringifyQ = queryString.stringify({
                        q: JSON.stringify(getRequestJobs(this.props.search.configJobs))
								});
								
                getData('/api/v1/jobs/search?'+StringifyQ).then(apiData => {
									this.props.getJobsData(apiData.data);
									Reactotron.log("from server", apiData.data);
                });
      }

	checkerList = (item) => {
		return (
			<div class="checkbox-block">
				<input type="checkbox" name={item.filter} key={item.id} id={item.id} checked={item.selected} onClick={this.onClickSelectJobs}/>
				<label for={item.id}>
					<span class="filter-checkbox">
						<span class="icon icon-check-mark"></span>
					</span>
					<span class="checkbox-text">{item.name}</span>
				</label>
			</div>	
		);		
	}
	 
  render() { 
    return (
		<div class="panel panel-default">
        <button class="btn btn-bg-transparent close-btn icon-btn"><span class="glyphicon glyphicon-remove"></span></button>
        <div class="filter-block">
            <div class="filter-title">
                Experience:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.search.configJobs.exp.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
				Posted:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.search.configJobs.post.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Place of Work:
            </div>
            <div class="checkbox-list-block clearfix">
                {this.props.search.configJobs.place.map(this.checkerList)}
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
													{this.props.search.configJobs.lang.map(this.checkerList)}
										</div>
								</div>
						</div>
					</div>
				</div>				
        <div class="filter-block">
            <div class="filter-title">
                Location:
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
                            {this.props.search.configJobs.loc.map(this.checkerList)}
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
                {this.props.search.configJobs.avl.map(this.checkerList)}
            </div>
        </div>

        <div class="filter-block">
            <div class="filter-title">
              Payment:
            </div>
            <div class="checkbox-list-block clearfix">
                {this.props.search.configJobs.payment.map(this.checkerList)}
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
            <div class="filter-dropdown-block clearfix">
                <button type="button" class="btn btn-default dropdown-toggle">
                    <div class="flexbox justify-space-between">
                        <span class="text">Budget</span>
                        <span class="icon icon-down-arrow"></span>
                    </div>
                </button>
                <div class="dropdown-list">
                    <div class="caret-block">
                        <span class="caret-top"></span>
                    </div>
                    <div class="dropdown-list-wrapper">
                        <div class="checkbox-list-block">
                            {this.props.search.configJobs.bud.map(this.checkerList)}
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        
        <div class="filter-block">
            <div class="filter-title">
                Proposals:
            </div>
            <div class="checkbox-list-block clearfix">
                {this.props.search.configJobs.prop.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Job Delivery::
            </div>
            <div class="checkbox-list-block clearfix">
                {this.props.search.configJobs.prop.map(this.checkerList)}
            </div>
        </div>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
					getJobsData,
					selectExpJobs,
					selectPostJobs,
					selectPlaceJobs,
					selectAvlJobs,
					selectLangJobs,
					selectLocJobs,
					getCountriesJobs, getLanguageJobs,
        },
        dispatch
    );
 };

function mapStateToProps (state) {
    return  {
        search:state.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)  (LeftSideBarFiltersJobs);