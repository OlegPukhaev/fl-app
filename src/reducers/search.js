import Reactotron from 'reactotron-react-js';

const 
		GET_DATA = 'GET_DATA',
		DATA_TOGGLER = 'DATA_TOGGLER',
		INPUT_SEARCH = 'INPUT_SEARCH';


let initialState = {
	config : {
		q: "%7B%7D",
		// exp:[],
    // avl:"",
    // lang:[],
    // loc:[],
    // skill:"",
    // rate:"",
		// place:[
		// 	{online:false},
		// 	{onsite:false}
		// ],
    // ds:""
	},
	toggler:"Tellents",
	
}

  export function getData(value) {
      return dispatch => {
        dispatch({
          type: GET_DATA, 
          payload: value
        });
      };
    }

  export function dataToggler(value) {
      return dispatch => {
        dispatch({
          type: DATA_TOGGLER, 
          payload: value
        });
      };
    }

const actionsMap = {
	[GET_DATA]: (state, action) => {
			return {
					...state, 
					searchData: action.payload
		}
	},   
	[DATA_TOGGLER]: (state, action) => {
			return {
					...state, 
					toggler: action.payload
		}
	}  

};

export default function search(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }