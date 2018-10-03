import Reactotron from 'reactotron-react-js';

const	SHOW_MODAL_WIN = 'SHOW_MODAL_WIN';

let initialState = {
  modalWinToggler = "display:none"
}

export function winToggler(value) {
  if (value === true) {
    var typeToggler = SHOW_MODAL_WIN;
    var valueToggler = "display:block";
  } else {
    var typeToggler = SHOW_MODAL_WIN;
    var valueToggler = "display:none";
  }
  return dispatch => {
    dispatch({
      type: typeToggler,
      payload: valueToggler 
    });
  };
}

const actionsMap = {
	[SHOW_MODAL_WIN]: (state, action) => {
		return {
      ...state, 
      modalWinToggler: action.payload
    }
	},
}

export default function jobs(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}