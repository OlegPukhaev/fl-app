import Reactotron from 'reactotron-react-js';
import React from 'react';
import {getRequestJobs} from './../../functions/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getData, fetchCountries, fetchLanguage, fetchJobsData} from './../../functions/api'
import {getJobsData, selectPaymentJobs, selectBudJobs, selectPropJobs, getCountriesJobs, getLanguageJobs, 
  selectExpJobs, selectPostJobs, selectPlaceJobs, selectAvlJobs, selectLangJobs, selectLocJobs,
  inputPaymentFrom, inputPaymentTo} from './../../reducers/search'

const queryString = require('query-string');

class LeftSideBarFiltersJobs extends React.Component {

  componentDidMount() {
        fetchCountries().then(apiData => {
			this.props.getCountriesJobs(apiData.data);
		});
        fetchLanguage().then(apiData => {
			this.props.getLanguageJobs(apiData.data);
		});
  }

    getRequestJobs = () => {
      var StringifyQ = queryString.stringify({
        q: JSON.stringify(getRequestJobs(this.props.search.configJobs))
      });
      fetchJobsData(StringifyQ).then(apiData => {
              this.props.getJobsData(apiData.data);
              Reactotron.log("from server", apiData.data);
      });      
    }

    onClickSelectJobs = (event) => {
          switch (event.target.name){
              case 'exp1':
                  this.props.selectExpJobs(event.target.id);
                  this.getRequestJobs();
                  return;
              case 'post':
                  this.props.selectPostJobs(event.target.id);
                  this.getRequestJobs();
                  return;
              case 'place':
                  this.props.selectPlaceJobs(event.target.id);
                  this.getRequestJobs();
                  return;
                case 'lang':
                  this.props.selectLangJobs(event.target.id);
                  this.getRequestJobs();
                  return;
                case 'loc':
                  this.props.selectLocJobs(event.target.id);
                  this.getRequestJobs();
                  return;
              case 'avl':
                  this.props.selectAvlJobs(event.target.id);
                  this.getRequestJobs();
                  return;
            case 'prop':
                  this.props.selectPropJobs(event.target.id);
                  this.getRequestJobs();
                  return;
            case 'bud':
                  this.props.selectBudJobs(event.target.id);
                  this.getRequestJobs();
                  return;
            case 'payment':
                  this.props.selectPaymentJobs(event.target.id);
                  this.getRequestJobs();
                  return;
            }
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
   
  inputFrom = (event) =>{
    // Reactotron.log(event.target.value);
    this.props.inputPaymentFrom(event.target.value);
  }
  inputTo = (event) =>{
    this.props.inputPaymentTo(event.target.value);
    // Reactotron.log(event.target.value);
  }
  sendPayment = (event) => {
    // this.props.selectPaymentJobs(event.target.id,this.props.search.configJobs.p_from, this.props.search.configJobs.p_to);
    this.getRequestJobs(event.target.id,this.props.search.configJobs.p_from, this.props.search.configJobs.p_to);
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
              <input type="text" id="p_from"  class="form-control" onChange={this.inputFrom}/> 
              <span>to</span>
              <input type="text" id="p_to"  class="form-control" onChange={this.inputTo}/>
            </div>
              <button id="send_p_from_p_to" class="btn" onClick={this.sendPayment}>Search</button>
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
            selectPropJobs,
            getCountriesJobs, getLanguageJobs,
            selectBudJobs,
            selectPaymentJobs,
            inputPaymentFrom,
            inputPaymentTo
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