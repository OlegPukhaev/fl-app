import Reactotron from 'reactotron-react-js';

const 
		GET_TELLENTS_DATA = 'GET_TELLENTS_DATA',
		GET_JOBS_DATA = 'GET_JOBS_DATA',
		DATA_TOGGLER = 'DATA_TOGGLER',
		INPUT_SEARCH = 'INPUT_SEARCH';


let initialState = {
	config : {
		q:"",
		exp:[
						{
						id: "intern",
						selected : false,
						name: "Intern"
					},
					{
						id:"junior",
						selected: false,
						name: "Junior"
					},
					{
						id:"senior",
						selected: false,
						name: "Senior" 
					},
					{
						id:"expert",
						selected: false,
						name: "Expert"
					}
				],
		ds:[
					{
						id: "i_100",
						selected : false,
						name: "100%"
					},
					{
						id:"m_95",
						selected: false,
						name: "> 95%"
					},
					{
						id:"i_85_95",
						selected: false,
						name: "85-95%" 
					},
					{
						id:"l_85",
						selected: false,
						name: "< 85%"
					}
				],
		skill:[
					{
						id: "i_5",
						selected : false,
						name: "Best (5)"
					},
					{
						id:"i_5_4",
						selected: false,
						name: "5-4.6"
					},
					{
						id:"i_4",
						selected: false,
						name: "4.6-4" 
					},
					{
						id:"l_4",
						selected: false,
						name: "< 4"
					}
				],
	},
	isTellents:true,
	isJobs:false,
	tellentsData: null,
	jobsData: null
	
}

  export function inputSearch(value) {
      return dispatch => {
        dispatch({
          type: INPUT_SEARCH, 
          payload: value
        });
      };
		}
		
  export function getJobsData(value) {
      return dispatch => {
        dispatch({
          type: GET_JOBS_DATA, 
          payload: value
        });
      };
		}
		
  export function getTellentsData(value) {
      return dispatch => {
        dispatch({
          type: GET_TELLENTS_DATA, 
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
			state.config.q = action.payload;
			// alert(state.config.q);
			return {
					...state, 
					config: state.config
		}
	},   
	[GET_TELLENTS_DATA]: (state, action) => {
			return {
					...state, 
					tellentsData: action.payload
		}
	},   
	[GET_JOBS_DATA]: (state, action) => {
			return {
					...state, 
					jobsData: action.payload
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