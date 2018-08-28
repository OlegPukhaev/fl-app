const ADD_USER = 'ADD_USER',
      EXIT_USER = 'DELL_USER';

let initialState = {
  userinfo:[]
  //   first_name : "User",  
  //   last_name : "Name",  
  //   email : "test@test.com",  
	// full_name: "User Name"
    }

export function addUser(object) {
  console.log("nnn");
    return dispatch => {
      dispatch({
		type: ADD_USER, 
		payload: object
      });
    };
  }

export function exitUser() {
    return dispatch => {
      dispatch({
    type: EXIT_USER, 
    payload: {}
      });
    };
  }

const actionsMap = {
	[ADD_USER]: (state, action) => {
    // state.userinfo = action.payload
      return state = {
        userinfo: action.payload
      }
	},
	[EXIT_USER]: (state, action) => {
		return state = {
      userinfo: action.payload
    }
  }
};

export default function getUser(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }