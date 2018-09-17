import Reactotron from 'reactotron-react-js';

const 
    GET_TELLENT = 'GET_TELLENT',
    GET_JOBS = 'GET_JOBS',
    DATA_TOGGLER = 'GET_TOGGLER';


let initialState = {
  tellentsdata : [],
  jobsdata:[],
  toggler:false
}

  export function getTellent(value) {
      return dispatch => {
        dispatch({
          type: GET_TELLENT, 
          payload: value
        });
      };
    }

  export function getJobs(value) {
      return dispatch => {
        dispatch({
          type: GET_JOBS, 
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
	[GET_TELLENT]: (state, action) => {
			return {
					...state, 
					tellentsdata: action.payload
		}
	},   
	[GET_JOBS]: (state, action) => {
			return {
					...state, 
					jobsdata: action.payload
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