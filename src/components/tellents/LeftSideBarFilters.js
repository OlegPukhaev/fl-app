import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectExp} from './../../reducers/search'
// import '../../App.css';

class LeftSideBarFilters extends React.Component {
	constructor (props){
		super(props);

		this.state = {name:""};
	}

    onClickSelect = (event) => {
        this.props.selectExp(event.target.id);
        alert(event.target.name);
    }

	checkerList = (item, index) => {
		return (
			<div class="checkbox-block">
				<input type="checkbox" name={this.state.name} key={item.id} id={index} cheked={item.selected} onClick={this.onClickSelect}/>
				<label for={index}>
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
								{this.props.data.exp.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Job Done Success:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.data.ds.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Skill Test Score:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.data.skill.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
						Freelancer Rate:
            </div>
            <div class="checkbox-list-block clearfix">
								{this.props.data.rate.map(this.checkerList)}
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
													{this.props.data.lang.map(this.checkerList)}
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
                            {this.props.data.loc.map(this.checkerList)}
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
                {this.props.data.avl.map(this.checkerList)}
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">
                Place of Work:
            </div>
            <div class="checkbox-list-block clearfix">
                {this.props.data.place.map(this.checkerList)}
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