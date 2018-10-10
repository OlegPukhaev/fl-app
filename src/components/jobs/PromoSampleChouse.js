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
import PromoBlockFormBody from './PromoBlockFormBody';

// import PromoCatList from './PromoCatList';

class PromoSampleChouse extends React.Component {
constructor (props) {
  super(props);

  this.state = {
    count:0,
    catName:"Select Categories...",
    subCatName:"Select Sub categories...",
    hideList:"hide-list"
  }
}

  selectCheckbox = () => {
    this.props.selectChousePromo();
  }


  selectCategory = (event) => {
    this.props.setCategoryCheked(event.target.id);
  }

  selectSubCategory = (event) => {
    // alert(event.target.id);
    this.setState({subCatName:event.target.value});
    this.props.setSubCategoryCheked(event.target.id);
  }

  subCategoriesList = (item, index) => {
    //  alert("fff");
    if (this.props.promoId === item.id){
      return item.skill_categories.map(item => {
        return (
          
          <div className="radio">
            <input type="radio" name={item.name} id={item.id} value={item.name} onClick={this.selectSubCategory} />
            <label for={item.id}>
              <span className="radio-text">{item.name}</span>
            </label> 
          </div>
        )
      })
    }
   }

  listPromotions = (item, index) => {
    if (this.props.promoId === item.profession_category_id || this.props.promoId === null) {
        return (
          <div className="checkbox-block" id={item.id}>
          <input type="checkbox" id={item.id} />
          <label htmlFor={item.id} id={item.id} >
            <div className="panel-block flexbox" id={item.id} >
              <span className="checkbox-circle checkbox-sqw" id={item.id} >
                <span className="icon icon-check-mark"></span>
              </span>
              <div className="panel-wrapper" id={item.id} >
                <div className="panel panel-pink" id={item.id} >
                  <div className="panel-title flexbox justify-space-between" id={item.id} >
                    <span>{item.title}</span>
                    <span className="btn btn-blue-border btn-bold">Free</span>
                  </div>
                  <div className="panel-text" id={item.id} >
                    {item.description}
                    {/* Lorem ipsum dolor sit amet */}
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
    return (this.props.config.promotion.promotions.filter(item => (`prom-${item.profession_category_id}` === this.props.promoId || this.props.promoId === null )).length);
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
 
                              {/* <CatList promotions={this.props.config.promotion}/> */}
                      <div class="my-select-options">
                        <div class="radio-block">

                          {this.props.config.promotion !== null && this.props.config.promotion.categories.map((item) => 
                            <div class="radio" > 
                              <label for={item.id}>
                                <span className="radio-text">{item.name}</span>
                              </label>
                              <input type="radio" name={item.name} id={item.id} value={item.name} checked="" onClick={this.selectCategory}/>
                          </div>

                          )}
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
                       {/* {this.props.config.promotion.categories.map(this.subCategoriesList)} */}
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

                
                {/* {this.props.config.promotion && <PromoBlockFormBody promotions={this.props.config.promotion.promotions.filter(item => (item.profession_category_id === this.props.promoId || this.props.promoId === null ))} promoId={this.props.promoId}/>} */}
                {this.props.config.promotion && <PromoBlockFormBody />}
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