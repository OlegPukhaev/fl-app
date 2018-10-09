import Reactotron from 'reactotron-react-js';

const	TEMP = 'TEMP';

let initialState = {
    time_type: null,
    price: null,
    period_type: null,
    period: null,
    payment: null,
    level: null,
    hourly_price: null,
    contract_general_notes: null,
    commitment: null
}

export function getDefautlPromotions(value) {
  return dispatch => {
    dispatch({
      type: TEMP,
      payload:value
    });
  };
}

const actionsMap = {
	[TEMP]: (state, action) => {//checker
		return {
      ...state, 
      isDisabled:action.isDisabled,
      createIsChecked:action.createIsChecked,
      chooseIsChecked:action.chooseIsChecked
    }
	},
}
export default function jobsPaymentDetails(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}