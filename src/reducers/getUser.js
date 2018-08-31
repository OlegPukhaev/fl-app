const ADD_USER = 'ADD_USER',
      EXIT_USER = 'DELL_USER',
      USER_VALID = 'USER_VALID';

let initialState = {
  token:null,
  userinfo:[]
}

  export function userValid(value) {
      return dispatch => {
        dispatch({
          type: USER_VALID, 
          payload: value
        });
      };
    }

export function addUser(object) {
    return dispatch => {
      dispatch({
		type: ADD_USER, 
    payload: object,
      });
    };
  }

export function exitUser() {
  var userobj = [];
    return dispatch => {
      dispatch({
    type: EXIT_USER, 
    payload: userobj
      });
    };
  }

const actionsMap = {
	[ADD_USER]: (state, action) => {
      return {...state,
        userinfo: action.payload
      }
	},
	[EXIT_USER]: (state, action) => {
    state.userinfo = []
		return state = {
      userinfo: state.userinfo,
    }
  },
	[USER_VALID]: (state, action) => {
		return state = {...state,
      token: action.payload
    }
  }
};

export default function getUser(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }