import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getData} from './../../functions/api'
import {getCountries, getLanguage, selectExp, selectDs, selectPlace, selectSkill, selectRate, selectAvl, selectLang, selectLoc} from './../../reducers/search'

// import '../../App.css';

class LeftSideBarFiltersJobs extends React.Component {
	// constructor (){
	// 	super();
	// }

	checkerList = (item) => {
		return (
			<div class="checkbox-block">
				<input type="checkbox" id={item.id} cheked={item.selected}/>
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

    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            selectExp,
            selectDs,
            selectPlace,
            selectSkill,
            selectRate,
            selectAvl,
            selectLang,
            selectLoc,
            getCountries, getLanguage,
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