const GET_SKILLS = 'GET_SKILLS';

let initialState = {
  skillsdata:[],
  testname: "Oleg"
}

  export function getSkills(value) {
      return dispatch => {
        dispatch({
          type: GET_SKILLS, 
          payload: value
        });
      };
    }

const actionsMap = {
	[GET_SKILLS]: (state, action) => {
      // state.skillsinfo = action.payload.profession_categories.filter(state.skillsinfo.profession_categories);
      return {...state,
        skillsdata: action.payload
      };
	}
};

export default function userSkills(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }