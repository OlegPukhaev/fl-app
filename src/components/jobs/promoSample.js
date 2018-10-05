import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winToggler} from './../../reducers/jobs';
import {modalWinToggler} from './../../selectors';
import './../../App';
import {successMessage, warningMessage} from './../../functions/function';
import PromoSampleNew from './PromoSampleNew';
import PromoSampleChouse from './PromoSampleChouse';

const queryString = require('query-string');

class PromoSample extends React.Component {

	render() {
    return (
      <div className="form-block">
        <div className="form-block-wrapper promo-sample-block">
          <PromoSampleNew />
          <PromoSampleChouse />
        </div>
      </div>
    
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{
				winToggler
			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {
			modalWinToggler:modalWinToggler(state)
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(PromoSample)