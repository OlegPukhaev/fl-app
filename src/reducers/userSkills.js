import Reactotron from 'reactotron-react-js';

const GET_SKILLS = 'GET_SKILLS',
      ADD_SKILL = 'ADD_SKILL',
      ADD_SKILL_TAG = 'ADD_SKILL_TAG',
      SET_ACTIVE = 'SET_ACTIVE',
      CHECK_SUB_CAT = 'CHECK_SUB_CAT',
      SEARCH_SKILL_TAG_WIN = 'SEARCH_SKILL_TAG_WIN',
      REMOVE_SKILL = 'REMOVE_SKILL',
      REMOVE_SKILL_TAG = 'REMOVE_SKILL_TAG',
      BACK_WINDOW = 'BACK_WINDOW',
      EMPTY_INPUT = 'EMPTY_INPUT',
      GET_MENU_SKILLS = 'GET_MENU_SKILLS';


let initialState = {
  skillsdata : [],
  categories : [],
  addCategories: [],
  activeWin: "step-3-open",
  addSkillId: null,
  showSkillTagWin: false,
  backWindow:"step-3-open",
  emptyInput:""
}

  export function setInputEmpty(value) {
      return dispatch => {
        dispatch({
          type: EMPTY_INPUT, 
          payload: value
        });
      };
    }

  export function skillBackWindow(value) {
      return dispatch => {
        dispatch({
          type: BACK_WINDOW, 
          payload: value
        });
      };
    }

  export function searchSkillTagWin(value) {
      return dispatch => {
        dispatch({
          type: SEARCH_SKILL_TAG_WIN, 
          payload: value
        });
      };
    }

  export function getSkills(value) {
      return dispatch => {
        dispatch({
          type: GET_SKILLS, 
          payload: value
        });
      };
    }

  export function getMenuSkills(value) {
      return dispatch => {
        dispatch({
          type: GET_MENU_SKILLS, 
          payload: value
        });
      };
    }

  export function removeSkill(value) {
      return dispatch => {
        dispatch({
          type: REMOVE_SKILL, 
          payload: value-1
        });
      };
    }
  
  export function addSkill(value) {
      return dispatch => {
        dispatch({
          type: ADD_SKILL, 
          payload: value
        });
      };
    }

  export function setActiveWin(value, skillId) {
      return dispatch => {
        dispatch({
          type: SET_ACTIVE, 
          payload: value,
          id:skillId-1
        });
      };
    }

  export function checkSubcat(catId, subCatId) {
    return dispatch => {
      dispatch({
        type: CHECK_SUB_CAT, 
        id : catId,
        subId: subCatId
      });
    }; 
  }

  export function addSkillTags(skillId, tagId, tagName) {
    return dispatch => {
      dispatch({
        type: ADD_SKILL_TAG, 
        skillId : skillId,
        tagId: tagId,
        tagName: tagName
      });
    }; 
  }

  export function removeSkillTags(sId, tId) {
    return dispatch => {
      dispatch({
        type: REMOVE_SKILL_TAG, 
        skillId : sId,
        tagId: tId
      });
    }; 
  }

const actionsMap = {
	[GET_MENU_SKILLS]: (state, action) => {
    var copy = Object.assign([], action.payload)
    return {
      ...state, 
      addCategories: copy
    }
	},
	[GET_SKILLS]: (state, action) => {
    return {
      ...state, 
      skillsdata: action.payload,
      // categories: action.payload.filter(item => {
      //   if (item.selected === true) return item;
      // })
    }
	},
	[REMOVE_SKILL]: (state, action) => {
    state.skillsdata[action.payload].selected=false;
    state.skillsdata[action.payload].skill_tags=[];
    state.skillsdata[action.payload].skill_categories.map(item => {
      item.selected = false;
    });
    return {
        ...state,
        skillsdata: state.skillsdata,
        categories: state.categories.filter(item => item.id != action.payload)
    }
	},
	[ADD_SKILL]: (state, action) => {
    // state.addCategories.map(item => {
    //   item.selected = false;
    // });
    // state.addCategories[action.payload-1].selected=true;
    // // Reactotron.log('fff',state.skillsdata);
    return {
        ...state,
        addCategories: state.addCategories
    }
	},
	[SET_ACTIVE]: (state, action) => {
    // Reactotron.log(action.payload);
    return {
        ...state,
        activeWin: action.payload,
        addSkillId: action.id
    }
  },
	[SEARCH_SKILL_TAG_WIN]: (state, action) => {
    return {
        ...state,
        showSkillTagWin: action.payload
    }
  },
	[CHECK_SUB_CAT]: (state, action) => {
    if(state.skillsdata[action.id].skill_categories[action.subId].selected !== true) {
      state.skillsdata[action.id].selected = true;
      state.skillsdata[action.id].skill_categories[action.subId].selected = true;
    } else {
      state.skillsdata[action.id].selected = true;
      state.skillsdata[action.id].skill_categories[action.subId].selected = false;
    }
    return {
        ...state,
        skillsdata: state.skillsdata,
        categories: state.skillsdata.filter(item => {
          if (item.selected === true) return item;
        })
    }
  },
  [ADD_SKILL_TAG]: (state, action) => {
    state.skillsdata[action.skillId].skill_tags.push({"id": action.tagId, "name": action.tagName});
    return {
      ...state,
        skillsdata: state.skillsdata
    }
  },
  [REMOVE_SKILL_TAG]: (state, action) => {
    state.skillsdata[action.skillId].skill_tags.splice(action.tagId, 1);
    return {
      ...state,
        skillsdata: state.skillsdata
    }
  },
  [BACK_WINDOW]: (state, action) => {
    return {
      ...state,
        backWindow: action.payload
    }
  },
  [EMPTY_INPUT]: (state, action) => {
    return {
      ...state,
        emptyInput: action.payload
    }
  }

};

export default function userSkills(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }