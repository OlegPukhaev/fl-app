import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getData } from '../functions/api';
import {inputSearch} from '../../reducers/search';
import {searchData} from '../../functions/api';

class SearchForm extends React.Component {
	constructor () {
		super()

		this.state = {searchText:""}
	}

	onChangeSearchText = (event) => {
		this.props.inputSearch(event.target.value);
		// this.setState({searchText:event.target.value});
	}

	onClickGetData = () => {
		alert('fff '+this.props.search.config.q);
		searchData('/api/v1/tellents/search').then(apiData => {
			Reactotron.log(this.props.search.config.p, apiData);

		});
	}

  render() { 
		Reactotron.log(this.props.search.config.q);
    return (
			<div class="search-form">
			<form class="my-search-form" role="search">
				<input type="text" class="form-control" placeholder="Search" onChange={this.onChangeSearchText} />
				<div class="search-filter radio-block">
					<div class="radio">
						<input type="radio" name="optionsRadios" id="option-jobs" value="option1" checked={this.props.search.isJobs} />
						<label for="option-jobs">
								<span class="radio-text">Jobs</span>
						</label>
					</div>
					<div class="radio">
						<input type="radio" name="optionsRadios" id="option-talents" value="option2" checked={this.props.search.isTellents}/>
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
            inputSearch
        },
        dispatch
    );
 };

function mapStateToProps (state) {
    return  {
        search:state.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchForm);