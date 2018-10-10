import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




class PromoBlockFormBody extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  
  render() { 
    return ( 
    <div className="promo-block-form-body">
      {this.props.config.promotion && this.props.config.promotion.promotions.map(this.listPromotions)}
    </div>
    );
  }
}
 
export default PromoBlockFormBody;