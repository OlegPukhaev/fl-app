import Reactotron from 'reactotron-react-js';

const GET_SKILLS = 'GET_SKILLS',
      ADD_SKILL = 'ADD_SKILL',
      SET_ACTIVE = 'SET_ACTIVE',
      CHECK_SUB_CAT = 'CHECK_SUB_CAT',
      REMOVE_SKILL = 'REMOVE_SKILL';

let initialState = {
  skillsdata : [],
  categories : [],
  addCategories: [],
  activeWin: "step-3-open",
  addSkillId: null
}

  export function getSkills(value) {
      return dispatch => {
        dispatch({
          type: GET_SKILLS, 
          payload: value
        });
      };
    }

  export function removeSkill(value) {
      return dispatch => {
        dispatch({
          type: REMOVE_SKILL, 
          payload: value
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

const actionsMap = {
  
	[GET_SKILLS]: (state, action) => {
    // var copyObject = Object.assign([], action.payload);
    // Reactotron.log(copyObject);
    return {
      ...state, 
      skillsdata: action.payload,
      categories: action.payload.filter(item => {
        if (item.selected === true) return item;
      }),
      addCategories: action.payload
    }
	},
	[REMOVE_SKILL]: (state, action) => {
    state.skillsdata[action.payload-1].selected=false;
    return {
        ...state,
        categories: state.categories.filter(item => item.id != action.payload),
        skillsdata: state.skillsdata
    }
	},
	[ADD_SKILL]: (state, action) => {
    // state.addCategories.map(item => {
    //   item.selected = false;
    // });
    state.addCategories[action.payload-1].selected=true;
    // Reactotron.log('fff',state.skillsdata);
    return {
        ...state,
        addCategories: state.addCategories
    }
	},
	[SET_ACTIVE]: (state, action) => {
    Reactotron.log(action.payload);
    return {
        ...state,
        activeWin: action.payload,
        addSkillId: action.id
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
	}
};

export default function userSkills(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }