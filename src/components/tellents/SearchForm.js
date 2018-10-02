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

class SearchForm extends React.Component {
	constructor () {
		super()

		this.state = {searchText:""}
	}

	onChangeSearchText = (event) => {
		if (this.props.isTellents === true) this.props.inputSearch(event.target.value);
		if (this.props.isJobs === true) this.props.inputSearchJobs(event.target.value);
	}

	onClickGetData = () => {
		if (this.props.isTellents === true) var reqObj = getRequest(this.props.configTellents);
		if (this.props.isJobs === true) var reqObj = getRequestJobs(this.props.configJobs);

		Reactotron.log("request", reqObj);
		var StringifyQ = queryString.stringify({
				q: JSON.stringify(reqObj)
		});

		if (this.props.isTellents === true) {
			fetchTellentsData(StringifyQ).then(response => {
				this.props.getTellentsData(response.data);	
			});
		}
		if (this.props.isJobs === true) 
			fetchJobsData(StringifyQ).then(response => {
				this.props.getJobsData(response.data);	
			});
	}

	add = (event) => {
		Reactotron.log("Keycode", event);
	}

  render() { 
    return (
			<div class="search-form">
			<form class="my-search-form" role="search">
				<input type="text" class="form-control" placeholder="Search" onChange={this.onChangeSearchText} onKeyDown={this.add}/>
				<div class="search-filter radio-block">
					<div class="radio">
						<input type="radio" name="optionsRadios" id="option-jobs" value="option1" checked={this.props.isJobs} />
						<label for="option-jobs">
								<span class="radio-text">Jobs</span>
						</label>
					</div>
					<div class="radio">
						<input type="radio" name="optionsRadios" id="option-talents" value="option2" checked={this.props.isTellents}/>
						<label for="option-talents">
								<span class="radio-text">Talents</span>
						</label>
					</div>
				</div>
				<a href="#" type="submit" class="btn-search" onClick={this.onClickGetData}><i class="icon icon-loupe"></i></a>
			</form>
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

export default connect(mapStateToProps, mapDispatchToProps) (SearchForm);