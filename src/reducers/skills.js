const ADD_SKILLS = 'GET_SKILLS',
      GET_SKILLS = 'DELL_SKILLS',
      DEL_SKILLS = 'EDIT_SKILLS';

let initialState = {
  skills:[]
}

  export function getSkills(value) {
      return dispatch => {
        dispatch({
          type: GET_SKILLS,
          payload: value
        });
      };
    }

// export function addUser(object) {
//     return dispatch => {
//       dispatch({
// 		type: ADD_USER, 
//     payload: object,
//       });
//     };
//   }

// export function exitUser() {
//   var userobj = [];
//     return dispatch => {
//       dispatch({
//     type: EXIT_USER, 
//     payload: userobj
//       });
//     };
//   }

const actionsMap = {
	[GET_SKILLS]: (state, action) => {
      return {...state,
        userinfo: action.payload
      }
	},
	[ADD_SKILLS]: (state, action) => {
    state.userinfo = []
		return state = {
      userinfo: state.userinfo,
    }
  },
	[DEL_SKILLS]: (state, action) => {
		return state = {...state,
      token: action.payload
    }
  }
};

export default function userSkills(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }