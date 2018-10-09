import Reactotron from 'reactotron-react-js';

const	SHOW_MODAL_WIN = 'SHOW_MODAL_WIN';
const	INPUT_TITLE = 'INPUT_TITLE';
const	INPUT_DESCRIPTION = 'INPUT_DESCRIPTION';
const	GET_SKILL_CATEGORIES = 'GET_SKILL_CATEGORIES';
const	SET_SKILL_CHECKED = 'SET_SKILL_CHECKED';
const	SET_SUBCAT_CHECKED = 'SET_SUBCAT_CHECKED';
const	SHOW_TAG_WIN = 'SHOW_TAG_WIN';
const ADD_SKILL_TAG_JOB = 'ADD_SKILL_TAG_JOB';
const TAG_INPUT_SET = 'TAG_INPUT_SET';
const REMOVE_SKILL_TAG_JOB = 'REMOVE_SKILL_TAG_JOB';

const PROMOTION_TITLE = 'PROMOTION_TITLE';
const PROMOTION_DESCRIPTION = 'PROMOTION_DESCRIPTION';
const SELECT_CHOUSE_PROMO = 'SELECT_CHOUSE_PROMO';
const SELECT_CREATE_PROMO = 'SELECT_CREATE_PROMO';
const GET_DEFAUTL_PROMOTIONS = 'GET_DEFAUTL_PROMOTIONS';
const SET_CATEGORY_CHECKED = 'SET_CATEGORY_CHECKED';
const SET_SUB_CATEGORY_CHECKED = 'SET_SUB_CATEGORY_CHECKED';

const ADD_PAYMENT_DETAILS = 'ADD_PAYMENT_DETAILS';

let initialState = {
  modalWinToggler : "hide-form",
  isSkillSelected: false,
  activeSkillId:null,
  showSkillTagWin:false,
  tagInput:"",
  isDisabled:false,
  createIsChecked:true,
  chooseIsChecked:false,
  promCatName:"Category",
  listToggler:"show-list",
  promoId:null,
  config: {
    title:null,
    description: null,
    category:null,
    skill_tags:[],
    promotion_title: null,
    promotion_description: null,
    promotion:null,

    payment: null,
    price: null,
    hourly_price: null,

    period: null,
    period_type: null,

    commitment: null,
    level: null,
    time_type: null,
    contract_general_notes: null,
  }
}

export function addPaymentDetails(value) {
  return dispatch => {
    dispatch({
      type: ADD_PAYMENT_DETAILS,
      payload:value
    });
  };
}

export function getDefautlPromotions(value) {
  return dispatch => {
    dispatch({
      type: GET_DEFAUTL_PROMOTIONS,
      payload:value
    });
  };
}
export function selectCreatePromo() {
  return dispatch => {
    dispatch({
      type: SELECT_CREATE_PROMO,
      createIsChecked: true,
      chooseIsChecked: false,
      isDisabled: false
    });
  };
}
export function selectChousePromo() {
  return dispatch => {
    dispatch({
      type: SELECT_CHOUSE_PROMO,
      createIsChecked: false,
      chooseIsChecked: true,
      isDisabled: true
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
export function inputDescription(value) {
  return dispatch => {
    dispatch({
      type: INPUT_DESCRIPTION,
      payload: value 
    });
  };
}
export function setTagInput(value) {
  return dispatch => {
    dispatch({
      type: TAG_INPUT_SET, 
      payload: value,
    });
  }; 
}
export function addSkillTagsJobs(tagId, tagName) {
  return dispatch => {
    dispatch({
      type: ADD_SKILL_TAG_JOB, 
      tagId: tagId,
      tagName: tagName,

    });
  }; 
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
export function searchSkillTagWin(value) {
  // alert(catId +" " + subCatId);
  return dispatch => {
    dispatch({
      type: SHOW_TAG_WIN,
      payload:value
    });
  };
}
export function setSubCatChecked(catId, subCatId) {
  // alert(catId +" " + subCatId);
  return dispatch => {
    dispatch({
      type: SET_SUBCAT_CHECKED,
      catId: catId,
      subCatId: subCatId 
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
export function removeSkillTagsJobs(tId) {
  return dispatch => {
    dispatch({
      type: REMOVE_SKILL_TAG_JOB, 
      tagId: tId
    });
  }; 
}

export function inputPromoTitle(value) {
  return dispatch => {
    dispatch({
      type: PROMOTION_TITLE,
      payload: value 
    });
  };
}
export function inputPromoDescription(value) {
  return dispatch => {
    dispatch({
      type: PROMOTION_DESCRIPTION,
      payload: value 
    });
  };
}
export function setCategoryCheked(value) {
  // alert(value);
  return dispatch => {
    dispatch({
      type: SET_CATEGORY_CHECKED,
      payload: value
    });
  };
}
export function setSubCategoryCheked(value) {
  // alert(value);
  return dispatch => {
    dispatch({
      type: SET_SUB_CATEGORY_CHECKED,
      payload: value
    });
  };
}

const actionsMap = {
	[ADD_PAYMENT_DETAILS]: (state, action) => {//checker
    var copyObj = Object.assign({}, state.config)
    copyObj.payment = action.payload.payment;
    copyObj.price = action.payload.price;
    copyObj.hourly_price = action.payload.hourly_price;
    copyObj.period = action.payload.period;
    copyObj.period_type = action.payload.period_type;
    copyObj.commitment = action.payload.commitment;
    copyObj.level = action.payload.level;
    copyObj.time_type = action.payload.time_type;
    copyObj.contract_general_notes = action.payload.contract_general_notes;
    return {
      ...state, 
      config: copyObj
    }
	},
	[SELECT_CREATE_PROMO]: (state, action) => {//checker
		return {
      ...state, 
      isDisabled:action.isDisabled,
      createIsChecked:action.createIsChecked,
      chooseIsChecked:action.chooseIsChecked
    }
	},
	[SELECT_CHOUSE_PROMO]: (state, action) => {//checker
		return {
      ...state, 
      isDisabled:action.isDisabled,
      createIsChecked:action.createIsChecked,
      chooseIsChecked:action.chooseIsChecked
    }
	},
	[SET_SUBCAT_CHECKED]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.config)	
		copyObj.category[action.catId-1].skill_categories.map(item => {
			if (item.id === action.subCatId) {
        if(item.selected === true) {
        item.selected = false;
        }	else item.selected = true;
  }
});
		return {
      ...state, 
      config: copyObj
    }
	},
	[SET_SKILL_CHECKED]: (state, action) => {//radio
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
	[SET_CATEGORY_CHECKED]: (state, action) => {//radio
		var copyObj = Object.assign({}, state.config);
    var catName;
    var prId;
		copyObj.promotion.categories.map(item => {
			if (item.id === action.payload) {
        // alert("урра");
        catName = item.name;
        prId = item.id;
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
      ...state, 
      config: copyObj,
      promCatName: catName,
      listToggler:action.hideCats,
      promoId:prId
    }
	},
	[SET_SUB_CATEGORY_CHECKED]: (state, action) => {//radio
		var copyObj = Object.assign({}, state.config);
    // var catName;
    // var prId;
    alert(action.payload);
		copyObj.promotion.categories.skill_categories.map(item => {
			if (item.id === action.payload) {
        // catName = item.name;
        // prId = item.id;
        // alert(prId);
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
      ...state, 
      config: copyObj,
      // promCatName: catName,
      // listToggler:action.hideCats,
      // promoId:prId
    }
	},
	[GET_SKILL_CATEGORIES]: (state, action) => {
    action.payload.map(item => {
      item.selected = false;
      // item.id = `${item.id}`;
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
	[TAG_INPUT_SET]: (state, action) => {
		return {
      ...state, 
      tagInput: action.payload
    }
  },
	[SHOW_MODAL_WIN]: (state, action) => {
		return {
      ...state, 
      modalWinToggler: action.payload
    }
  },
  [ADD_SKILL_TAG_JOB]: (state, action) => {
    var copyObj = Object.assign({}, state.config)	
    copyObj.skill_tags.push({"id": action.tagId, "name": action.tagName});
    return {
      ...state,
        config: copyObj,
        tagInput:""
    }
  },
  [REMOVE_SKILL_TAG_JOB]: (state, action) => {
    var copyObj = Object.assign({}, state.config)	
    copyObj.skill_tags =state.config.skill_tags.filter(item => item.id !== Number(action.tagId));
    return {
      ...state,
        config: copyObj
    }
  },
	[SHOW_TAG_WIN]: (state, action) => {
		return {
      ...state, 
      showSkillTagWin: action.payload
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
	[PROMOTION_TITLE]: (state, action) => {
    var copyObj = Object.assign({}, state.config)	
    copyObj.promotion_title = action.payload;
		return {
      ...state, 
      config: copyObj
    }
	},
	[PROMOTION_DESCRIPTION]: (state, action) => {
    var copyObj = Object.assign({}, state.config)	
    copyObj.promotion_description = action.payload;
		return {
      ...state, 
      config:copyObj
    }
	},
	[GET_DEFAUTL_PROMOTIONS]: (state, action) => {
    var copyObj = Object.assign({}, state.config)	
    console.log(action.payload);
    copyObj.promotion = action.payload;
    copyObj.promotion.categories.map(item => {
      item.selected = false;
      item.id=`prom-${item.id}`;
      item.skill_categories.map(item => {
        item.selected = false;
        item.category_id = `prom-${item.id}`;
      });
    });
    copyObj.promotion.promotions.map(item => {
      item.profession_category_id = `prom-${item.profession_category_id}`;
    });
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