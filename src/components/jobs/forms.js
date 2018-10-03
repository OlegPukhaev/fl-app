import Reactotron from 'reactotron-react-js';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from './../selectors';
import {successMessage, warningMessage} from './../../functions/function';

const queryString = require('query-string');
// import queryString fro

class Tellent extends React.Component {
    render() {
      return (
        <div></div>
      );
    }
  }

	const mapDispatchToProps = dispatch => {
		return bindActionCreators(
			{

			},
			dispatch
		);
	 };
	
	function mapStateToProps (state) {
		return  {

		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(Tellent)