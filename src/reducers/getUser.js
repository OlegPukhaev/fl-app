const ADD_USER = 'ADD_USER',
      EXIT_USER = 'DELL_USER',
      USER_VALID = 'USER_VALID';

let initialState = {
  uservalid:null,
  userinfo:[]
  //   first_name : "User",  
  //   last_name : "Name",  
  //   email : "test@test.com",  
	// full_name: "User Name"
    }

  export function userValid(value) {
    console.log(value);
      return dispatch => {
        dispatch({
      type: ADD_USER, 
      payload: value,
      // validation: true
        });
      };
    }

export function addUser(object) {
  console.log(object);
    return dispatch => {
      dispatch({
		type: ADD_USER, 
    payload: object,
    // validation: true
      });
    };
  }

export function exitUser() {
  var userobj = [];
    return dispatch => {
      dispatch({
    type: EXIT_USER, 
    payload: userobj,
    // validation: false
      });
    };
  }

const actionsMap = {
	[ADD_USER]: (state, action) => {
      return state = {
        userinfo: action.payload,
        uservalid: action.validation
      }
	},
	[EXIT_USER]: (state, action) => {
		return state = {
      userinfo: action.payload,
      uservalid: action.validation
    }
  },
	[USER_VALID]: (state, action) => {
		return state = {
      uservalid: action.validation
    }
  }
};

export default function getUser(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }