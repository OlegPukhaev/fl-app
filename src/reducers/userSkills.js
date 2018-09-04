const GET_SKILLS = 'GET_SKILLS';

let initialState = {
  // token:null,
  skillsinfo:"Старые данные"
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
    console.log("Тут");
      return {...state,
        skillsinfo: action.payload
      }
	}
};

export default function userSkills(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }