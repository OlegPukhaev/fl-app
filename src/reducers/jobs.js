import Reactotron from 'reactotron-react-js';

const	SHOW_MODAL_WIN = 'SHOW_MODAL_WIN';
const	INPUT_TITLE = 'INPUT_TITLE';
const	INPUT_DESCRIPTION = 'INPUT_DESCRIPTION';
const	GET_SKILL_CATEGORIES = 'GET_SKILL_CATEGORIES';
// const	IS_SKILL_SELECTED = 'IS_SKILL_SELECTED';

let initialState = {
  modalWinToggler : "hide-form",
  isSkillSelected: false,

  config: {
    title:null,
    description: null,
    category:null,
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
  },
  configForResponse :{  }
}

export function winToggler(value) {
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

export function inputDescription(value) {
  return dispatch => {
    dispatch({
      type: INPUT_DESCRIPTION,
      payload: value 
    });
  };
}

export function getSkillCategories(value) {
  return dispatch => {
    dispatch({
      type: GET_SKILL_CATEGORIES,
      payload: value 
    });
  };
}

export function inputTitle(value) {
  return dispatch => {
    dispatch({
      type: INPUT_TITLE,
      payload: value 
    });
  };
}

const actionsMap = {
	[GET_SKILL_CATEGORIES]: (state, action) => {
    action.payload.map(item => {
      item.selected = false;
    });
    // Reactotron.log("++++=",action.payload);
		return {
      ...state, 
      config: {
        category : action.payload
      }
    }
	},
	[SHOW_MODAL_WIN]: (state, action) => {
		return {
      ...state, 
      modalWinToggler: action.payload
    }
	},
	[INPUT_TITLE]: (state, action) => {
		return {
      ...state, 
      title: action.payload
    }
	},
	[INPUT_DESCRIPTION]: (state, action) => {
		return {
      ...state, 
      description: action.payload
    }
	},
}

export default function jobs(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}