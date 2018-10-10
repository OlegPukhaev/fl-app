import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectChousePromo, setCategoryCheked, setSubCategoryCheked, getDefautlPromotions} from './../../reducers/jobs';
import {chooseIsChecked, defautlPromotions, promCatName, listToggler,skillConfig, promoId} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';
import {fetchDefaultPromotions} from './../../functions/api';
import PromoSampleNew from './PromoSampleNew';

class PromoSampleChouse extends React.Component {
constructor () {
  super();

  this.state = {
    count:0,
    catName:"Select Categories...",
    subCatName:"Select Sub categories...",
  }
}


  selectCheckbox = () => {
    this.props.selectChousePromo();
  }


  selectCategory = (event) => {
    this.props.setCategoryCheked(event.target.id);
  }

  selectSubCategory = (event) => {
    alert(event.target.id);
    this.setState({subCatName:event.target.value});
    this.props.setSubCategoryCheked(event.target.id);
  }

  categoriesList = (item , index) => {

      return (
        <div class="radio">
          <label htmlFor={item.id}>
            <span className="radio-text">{item.name}</span>
            <input type="radio" name="numb-options" id={item.id} value={item.name} onChange={this.selectCategory}/>
          </label>
        </div>
    );
  }

  selectDefaultPromo = (event) => {
    alert(event.target.id);
  }

  listPromotions = (item, index) => {
    if (this.props.promoId === item.profession_category_id || this.props.promoId === null) {

        return (
          <div className="checkbox-block" id={item.id} >
          <input type="checkbox" id={item.id} onClick={this.selectDefaultPromo}/>
          <label for="skill-test-3">
            <div className="panel-block flexbox">
              <span className="checkbox-circle checkbox-sqw">
                <span className="icon icon-check-mark"></span>
              </span>
              <div className="panel-wrapper">
                <div className="panel panel-pink">
                  <div className="panel-title flexbox justify-space-between">
                    <span>{item.title}</span>
                    <span className="btn btn-blue-border btn-bold">Free</span>
                  </div>
                  <div className="panel-text">
                    {item.description}
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  */}
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        );
      }
  }

 getCount = () => {
  if(this.props.config.promotion !== null) {
    return (this.props.config.promotion.promotions.filter(item => (item.profession_category_id === this.props.promoId || this.props.promoId === null )).length);
  }
 }

 subCategoriesList = (item, index) => {
  //  alert("fff");
  if (this.props.promoId === item.id){
    return item.skill_categories.map(item => {
      return (
        
        <div className="radio">
          <input type="radio" name="numb-options" id={item.id} value={item.name} checked="" onChange={this.selectSubCategory} />
          <label for={item.id}>
            <span className="radio-text">{item.name}</span>
          </label> 
        </div>
      )
    })
  }
 }

  async componentWillMount() {


    
        const res = await fetchDefaultPromotions().then(response => {
          // const resp = await response;
          return response;
        });

        Reactotron.log("--->",await res.data.categories);
        this.props.getDefautlPromotions(res.data); 
  }



	render() {
    // Reactotron.log({configfff:this.props.config.promotion.categories});
    return (
          <div className="radio-block">
            <div className="radio">
              <input type="radio" name="promo-sample" id="promo-ch" value="promo-ch" checked={this.props.chooseIsChecked} onClick={this.selectCheckbox}/>
              <label htmlFor="promo-ch">
                <span className="checkbox-sqw">
                  <span className="icon icon-check-mark"></span>
                </span>
                <span className="radio-text">or choose existing skill test</span>
              </label>
            </div>
            
            <div className="promo-block-form">
              <div className="promo-block-form-header flexbox justify-space-between">
                <div className="filter-nav flexbox justify-space-between">
                
                  <div class="my-select-box form-control">
                    <span class="my-select-result flexbox justify-space-between">
                      <span class="text">{this.props.promCatName}</span> 
                      <span class="caret"></span>
                    </span>
                          <div class="my-select-options">
                            <div class="radio-block">
                              {this.props.config.promotion !== null && this.props.config.promotion.categories.map(this.categoriesList)}
                             {/* {this.props.config.promotion.categories.map(this.categoriesList)} */}
                              {/* Reactotron.log */}
                            </div>	
                          </div>
                  </div>

                  <div className="my-select-box form-control">
                    <span className="my-select-result flexbox justify-space-between">
                      <span className="text">{this.state.subCatName}</span> 
                      <span className="caret"></span>
                    </span>
                    <div className="my-select-options">
                      <div className="radio-block">
                       {(this.props.config.promotion !== null && this.props.promoId !== null) && this.props.config.promotion.categories.map(this.subCategoriesList)}
                      </div>	
                    </div>
                  </div>
                </div>


                <div className="results-numb">
                  <span className="numb">

                    {this.getCount()}
                    {/* {this.state.count} */}
                  </span> results
                </div>
              </div>

              
               <div className="promo-block-form-body">
                  {this.props.config.promotion !== null && this.props.config.promotion.promotions.map(this.listPromotions)}
              </div>
            </div>
            {/* <button className="btn btn-bold btn-blue">Add Promotion</button> */}
          </div>
    
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
        selectChousePromo,
        setCategoryCheked,
        setSubCategoryCheked,
        getDefautlPromotions
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
      chooseIsChecked:chooseIsChecked(state),
      promotion:defautlPromotions(state),
      promCatName:promCatName(state),
      listToggler:listToggler(state),
      config:skillConfig(state),
      promoId:promoId(state)

		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PromoSampleChouse)