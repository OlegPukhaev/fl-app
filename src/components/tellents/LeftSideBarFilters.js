import '../../App.css';
import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import {getRequest} from './../../functions/function';
import {configTellents,showTellents} from './../../selectors';
import { connect } from 'react-redux';
import {getData, fetchCountries, fetchLanguage, fetchTellentsData} from './../../functions/api'
import {getTellentsData, getCountries, getLanguage, selectExp, selectDs, selectPlace, selectSkill, selectRate, selectAvl, selectLang, selectLoc} from './../../reducers/search'
const queryString = require('query-string');

class LeftSideBarFilters extends React.Component {

  componentDidMount() {
    fetchCountries().then(apiData => {
        this.props.getCountries(apiData.data);
		});
		
    fetchLanguage().then(apiData => {
        this.props.getLanguage(apiData.data);
    });
  }

  getRequestTellent = () => {
    var StringifyQ = queryString.stringify({
            q: JSON.stringify(getRequest(this.props.configTellents))
    });
		fetchTellentsData(StringifyQ).then(apiData => {
            this.props.getTellentsData(apiData.data);
            Reactotron.log("from server", apiData.data);
    });
  }

  onClickSelect = (event) => {
    // Reactotron.log(event.target.id, event.target.name);
      switch (event.target.name){
          case 'exp':
              this.props.selectExp(event.target.id);
              this.getRequestTellent();
              return;
          case 'ds':
              this.props.selectDs(event.target.id);
              this.getRequestTellent();
              return;
          case 'place':
              this.props.selectPlace(event.target.id);
              this.getRequestTellent();
              return;
          case 'skill':
              this.props.selectSkill(event.target.id);
              this.getRequestTellent();
              return;
          case 'rate':
              this.props.selectRate(event.target.id);
              this.getRequestTellent();
              return;
            case 'lang':
              this.props.selectLang(event.target.id);
              this.getRequestTellent();
              return;
            case 'loc':
              this.props.selectLoc(event.target.id);
              this.getRequestTellent();
              return;
            case 'avl':
              this.props.selectAvl(event.target.id);
              this.getRequestTellent();
              return;

        }
			

  }

	checkerList = (item, index) => {
    return (
        <div class="checkbox-block">
				<input type="checkbox" name={item.filter} key={item.id} id={item.id} checked={item.selected} onClick={this.onClickSelect}/>
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
    <div  class={`panel panel-default ${this.props.showTellents}`}>
        <button class="btn btn-bg-transparent close-btn icon-btn"><span class="glyphicon glyphicon-remove"></span></button>
        <div class="filter-block">
            <div class="filter-title">
                Experience:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.configTellents.exp.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Job Done Success:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.configTellents.ds.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Skill Test Score:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.configTellents.skill.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Freelancer Rate:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.configTellents.rate.map(this.checkerList)}
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
													{this.props.configTellents.lang.map(this.checkerList)}
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
                            {this.props.configTellents.loc.map(this.checkerList)}
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
                {this.props.configTellents.avl.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Place of Work:
            </div>
            <div class="checkbox-list-block clearfix">
                {this.props.configTellents.place.map(this.checkerList)}
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
						getTellentsData
        },
        dispatch
    );
 };

function mapStateToProps (state) {
    return  {
				search:state.search,
				configTellents: configTellents(state),
				showTellents:showTellents(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LeftSideBarFilters);