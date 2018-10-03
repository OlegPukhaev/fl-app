import Reactotron from 'reactotron-react-js';

const	SHOW_MODAL_WIN = 'SHOW_MODAL_WIN';

let initialState = {
  modalWinToggler : "hide-form",

  title:"",
  description: "description",
  category: {
    id: 1,
    name: "Web, Mobile & Software Dev",
    skill_categories:[]
  },
  skill_tags:[],
  promotion_title: "skil",
  promotion_description: "deskrip",


  time_type: "short",
  price: 10,
  period_type: "day",
  period: 4,
  payment: "fixed_price",
  level: "senior",
  hourly_price: null,
  contract_general_notes: "fsdfsdfdsfdsfdsf",
  commitment: "per_week_10",
  promotion: {
    //from default promotions
  }
}

export function winToggler(value) {
  // alert(value);
  if (value === true) {
    var typeToggler = SHOW_MODAL_WIN;
    var valueToggler = "show-form";
  } else {
    var typeToggler = SHOW_MODAL_WIN;
    var valueToggler = "hide-form";
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