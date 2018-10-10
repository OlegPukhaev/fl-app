import React, { Component } from 'react';

class PromoBlockFormBody extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  onClickCard = (e) => {
    alert(e.target.id , this.props.promoId);
  }

  

  render() { 
    const cardList = this.props.promotions.map(item => {
      // if (this.props.id === item.profession_category_id || this.props.id === null){
          return (
            <div className="checkbox-block">
              <input type="checkbox" id={item.id} onClick={this.onClickCard}/>
              <label htmlFor={item.id}  >
                <div className="panel-block flexbox"  >
                  <span className="checkbox-circle checkbox-sqw"  >
                    <span className="icon icon-check-mark"></span>
                  </span>
                  <div className="panel-wrapper"  >
                    <div className="panel panel-pink"  >
                      <div className="panel-title flexbox justify-space-between"  >
                        <span>{item.title}</span>
                        <span className="btn btn-blue-border btn-bold">Free</span>
                      </div>
                      <div className="panel-text"  >
                        {item.description}
                        {/* Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  */}
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
      );
    // }
    });
    return ( 
    <div className="promo-block-form-body">
      {/* {this.props.config.promotion && this.props.config.promotion.promotions.map(this.listPromotions)} */}

        {cardList}
    </div>
    );
  }
}
 
export default PromoBlockFormBody;