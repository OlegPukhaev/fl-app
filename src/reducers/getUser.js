const GET_USER = 'ADD_USER',
      EXIT_USER = 'DELL_USER';

let initialState = {
  userinfo:[]
};

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
	[GET_USER]: (state, action) => {
    console.log("User log");
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