import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getData} from './../../functions/api'
import {getCountries, getLanguage, selectExp, selectDs, selectPlace, selectSkill, selectRate, selectAvl, selectLang, selectLoc} from './../../reducers/search'
// import '../../App.css';

class LeftSideBarFilters extends React.Component {
	constructor (props){
		super(props);

		this.state = {name:""};
	}

  componentDidMount() {
    getData('/api/v1/misc/countries').then(apiData => {
			this.props.getCountries(apiData.data);
		});
		getData('/api/v1/misc/get_languages').then(apiData => {
			this.props.getLanguage(apiData.data);
		});
  }

  onClickSelect = (event) => {
      switch (event.target.name){
          case 'exp':
              this.props.selectExp(event.target.id);
          case 'ds':
              this.props.selectDs(event.target.id);
          case 'place':
              this.props.selectPlace(event.target.id);
          case 'skill':
              this.props.selectSkill(event.target.id);
          case 'rate':
              this.props.selectRate(event.target.id);
            case 'lang':
              this.props.selectLang(event.target.id);
              case 'loc':
              this.props.selectLoc(event.target.id);
          case 'avl':
              this.props.selectAvl(event.target.id);
          Reactotron.log(event.target.value);
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
			<div class="panel panel-default">
        <button class="btn btn-bg-transparent close-btn icon-btn"><span class="glyphicon glyphicon-remove"></span></button>
        <div class="filter-block">
            <div class="filter-title">
                Experience:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.search.config.exp.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Job Done Success:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.search.config.ds.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Skill Test Score:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.search.config.skill.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Freelancer Rate:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.search.config.rate.map(this.checkerList)}
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
													{this.props.search.config.lang.map(this.checkerList)}
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
                            {this.props.search.config.loc.map(this.checkerList)}
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
                {this.props.search.config.avl.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Place of Work:
            </div>
            <div class="checkbox-list-block clearfix">
                {this.props.search.config.place.map(this.checkerList)}
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

export default connect(mapStateToProps, mapDispatchToProps) (LeftSideBarFilters);