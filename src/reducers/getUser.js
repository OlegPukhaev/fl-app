const ADD_USER = 'ADD_USER',
      EXIT_USER = 'DELL_USER',
      USER_VALID = 'USER_VALID';

let initialState = {
  uservalid:false,
  userinfo:[]
}

  export function userValid(value) {
    // console.log(value);
      return dispatch => {
        dispatch({
      type: USER_VALID, 
      uservalid: value
        });
      };
    }

export function addUser(object) {
  // console.log(object);
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
      // uservalid: false
    }
  },
	[USER_VALID]: (state, action) => {
		return state = {...state,
      uservalid: action.uservalid
    }
  }
};

export default function getUser(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }