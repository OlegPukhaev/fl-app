import Reactotron from 'reactotron-react-js';

const 
		GET_TELLENTS_DATA = 'GET_TELLENTS_DATA',
		GET_JOBS_DATA = 'GET_JOBS_DATA',
		DATA_TOGGLER = 'DATA_TOGGLER',
		GET_LANGUAGE = 'GET_LANGUAGE',
		GET_COUNTRIES = 'GET_COUNTRIES',
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
		rate:[	
					{
						id: "i_5",
						selected : false,
						name: "Best (5)"
					},
					{
						id:"i_5_4",
						selected: false,
						name: "5-4.8"
					},
					{
						id:"i_4",
						selected: false,
						name: "4.8-4.5" 
					},
					{
						id:"l_4",
						selected: false,
						name: "< 4.5"
					}
				],
		avl:[	
					{
						id: "per_week_up_to_20",
						selected : false,
						name: "< 20h"
					},
					{
						id:"per_week_30",
						selected: false,
						name: "30h"
					},
					{
						id:"per_week_more_than_30",
						selected: false,
						name: "> 30h" 
					},
					{
						id:"per_week_full_time",
						selected: false,
						name: "Full Time"
					}
				],
		place:[	
					{
						id: "online",
						selected : false,
						name: "On-Line"
					},
					{
						id:"onsite",
						selected: false,
						name: "On-Site"
					}
				],
		lang:[],
		loc:[],
	},
	configJobs : {
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
		post:[
					{
						id: "i24",
						selected : false,
						name: "24h"
					},
					{
						id:"i3d",
						selected: false,
						name: "3d"
					},
					{
						id:"i1w",
						selected: false,
						name: "1w" 
					},
					{
						id:"m_1w",
						selected: false,
						name: "> 1w"
					}
				],
		prop:[
					{
						id: "i0_5",
						selected : false,
						name: "0 - 5"
					},
					{
						id:"i5_10",
						selected: false,
						name: "5 - 10"
					},
					{
						id:"i10_20",
						selected: false,
						name: "10 - 20" 
					},
					{
						id:"m_20",
						selected: false,
						name: "> 20"
					},
					{
						id:"undefined",
						selected: false,
						name: "None"
					}
				],
		rate:[	
					{
						id: "i_5",
						selected : false,
						name: "Best (5)"
					},
					{
						id:"i_5_4",
						selected: false,
						name: "5-4.8"
					},
					{
						id:"i_4",
						selected: false,
						name: "4.8-4.5" 
					},
					{
						id:"l_4",
						selected: false,
						name: "< 4.5"
					}
				],
		avl:[	
					{
						id: "per_week_10",
						selected : false,
						name: "< 20h"
					},
					{
						id:"per_week_up_to_30",
						selected: false,
						name: "> 20h"
					},
					{
						id:"Full-Time",
						selected: false,
						name: "per_week_more_than_30" 
					},
					{
						id:"decide_later",
						selected: false,
						name: "Undefined"
					}
				],
		place:[	
					{
						id: "online",
						selected : false,
						name: "On-Line"
					},
					{
						id:"onsite",
						selected: false,
						name: "On-Site"
					}
				],
		lang:[],
		loc:[],
	},
	isTellents:true,
	isJobs:false,
	tellentsData: null,
	jobsData: null
	
}

  export function getCountries(value) {
      return dispatch => {
        dispatch({
          type: GET_COUNTRIES, 
          payload: value
        });
      };
		}

  export function getLanguage(value) {
      return dispatch => {
        dispatch({
          type: GET_LANGUAGE, 
          payload: value
        });
      };
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
	[GET_LANGUAGE]: (state, action) => {

		state.config.lang = action.payload.languages;
			return {
					...state, 
					config: state.config
		}
	},   
	[GET_COUNTRIES]: (state, action) => {
		state.config.loc = action.payload;
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