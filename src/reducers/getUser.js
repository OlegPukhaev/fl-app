const GET_USER = 'ADD_USER',
      EXIT_USER = 'DELL_USER',
      IS_USER_LOGIN = "IS_USER_LOGIN";

let initialState = {
  userinfo:[],
  isUserLogin: false
};

export function setUserStatus(value) {
    return dispatch => {
      dispatch({
		type: IS_USER_LOGIN, 
    payload: value
      });
    };
  }

export function getUser(object) {
    return dispatch => {
      dispatch({
		type: GET_USER, 
    payload: object
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
	[IS_USER_LOGIN]: (state, action) => {
    // console.log("User log");
      return {...state,
        isUserLogin: action.payload
      }
	},
	[GET_USER]: (state, action) => {
    // console.log("User log");
      return {...state,
        userinfo: action.payload
      }
	},
	[EXIT_USER]: (state, action) => {
    state.userinfo = []
		return {...state ,
      userinfo: state.userinfo
    }
  }
};

export default function getUser(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }