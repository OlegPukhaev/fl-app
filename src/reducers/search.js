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
	isTellents:true,
	isJobs:false
	
}

  export function inputSearch(value) {
      return dispatch => {
        dispatch({
          type: INPUT_SEARCH, 
          payload: value
        });
      };
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
	[INPUT_SEARCH]: (state, action) => {
			return {
					...state, 
					config: state.config.q = action.payload
		}
	},   
	[GET_DATA]: (state, action) => {
			return {
					...state, 
					searchData: action.payload
		}
	},   
	[DATA_TOGGLER]: (state, action) => {
			Reactotron.log(state.isTellents, state.isJobs);
			var val1, val2;
			switch (action.payload){
				case 'jobs-filter-2':
					val1=false;
					val2=true;
				case 'talents-filter-2':
					val1=true;
					val2=false;
				case 'toggle-id':
					if (state.isTellents === true){
						val1=false;
						val2=true;
					} else {
						val1=true;
						val2=false;
					}
			}
		
				return {
						...state, 
						isTellents: val1,
						isJobs: val2
				}
	}  

}

export default function search(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }