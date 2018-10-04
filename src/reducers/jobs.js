import Reactotron from 'reactotron-react-js';

const	SHOW_MODAL_WIN = 'SHOW_MODAL_WIN';
const	INPUT_TITLE = 'INPUT_TITLE';
const	INPUT_DESCRIPTION = 'INPUT_DESCRIPTION';
const	GET_SKILL_CATEGORIES = 'GET_SKILL_CATEGORIES';
const	SET_SKILL_CHECKED = 'SET_SKILL_CHECKED';

let initialState = {
  modalWinToggler : "hide-form",
  isSkillSelected: false,
  activeSkillId:null,
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
  }
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

export function setSkillChecked(value) {
  return dispatch => {
    dispatch({
      type: SET_SKILL_CHECKED,
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
	[SET_SKILL_CHECKED]: (state, action) => {
		var copyObj = Object.assign({}, state.config)	
		copyObj.category.map(item => {

			if (item.id === Number(action.payload)) {
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
      ...state, 
      config: copyObj,
      isSkillSelected:true,
      activeSkillId:Number(action.payload)
    }
	},
	[GET_SKILL_CATEGORIES]: (state, action) => {
    action.payload.map(item => {
      item.selected = false;
      // item.id = `${item.id}`
      item.skill_categories.map(sitem => {
        sitem.selected = false;
        sitem.id = `subcat-${sitem.id}`;
      })
    });
    var copyObj = Object.assign({}, state.config)	
    // Reactotron.log("++++=",copyObj);
    copyObj.category = action.payload;
		return {
      ...state, 
      config: copyObj
    }
	},
	[SHOW_MODAL_WIN]: (state, action) => {
		return {
      ...state, 
      modalWinToggler: action.payload
    }
	},
	[INPUT_TITLE]: (state, action) => {
    var copyObj = Object.assign({}, state.config)	
    copyObj.title = action.payload;
		return {
      ...state, 
      config: copyObj
    }
	},
	[INPUT_DESCRIPTION]: (state, action) => {
    var copyObj = Object.assign({}, state.config)	
    copyObj.description = action.payload;
		return {
      ...state, 
      config:copyObj
    }
	},
}

export default function jobs(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}