const GET_USER = 'GET_USER';

let initialState = {
    first_name : "User",  
    last_name : "Name",  
    email : "test@test.com",  
	full_name: "User Name"
    }

export function getUser(value) {
    return dispatch => {
      dispatch({
        type: GET_USER, 
        payload: value      
      });
    };
  }

const actionsMap = {

	[GET_USER]: (state, action) => {
		return {
					...state, 
					card: [...state.card, action.payload]
		};
	},
};

export default function getUser(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }