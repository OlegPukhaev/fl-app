const GET_SKILLS = 'GET_SKILLS',
      REMOVE_SKILL = 'REMOVE_SKILL';

let initialState = {
  skillsdata : [],
  categories : []
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

const actionsMap = {
	[GET_SKILLS]: (state, action) => {
    return {
      ...state, 
      skillsdata: action.payload,
      categories: action.payload.filter(item => {
        if (item.selected === true) return item;
      })

    }
	},
	[REMOVE_SKILL]: (state, action) => {
    // console.log("фильтер" , state.categories.filter(item => item.id != action.payload));
    // console.log(state.skillsdata[action.payload-1].selected);
    state.skillsdata[action.payload-1].selected=false;
    return {
        ...state,
        categories: state.categories.filter(item => item.id != action.payload),
        skillsdata: state.skillsdata
    }
	}
};

export default function userSkills(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }