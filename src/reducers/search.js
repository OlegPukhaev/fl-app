import Reactotron from 'reactotron-react-js';

const 
	GET_TELLENTS_DATA = 'GET_TELLENTS_DATA',
	GET_JOBS_DATA = 'GET_JOBS_DATA',
	DATA_TOGGLER = 'DATA_TOGGLER',
	GET_LANGUAGE = 'GET_LANGUAGE',
	GET_COUNTRIES = 'GET_COUNTRIES',
	INPUT_SEARCH = 'INPUT_SEARCH';

const	SELECT_EXP = 'SELECT_EXP';
const	SELECT_DS = 'SELECT_DS';
const	SELECT_PLACE = 'SELECT_PLACE';
const	SELECT_SKILL = 'SELECT_SKILL';
const	SELECT_RATE = 'SELECT_RATE';
const	SELECT_AVL = 'SELECT_AVL';
const	SELECT_LANG = 'SELECT_LANG';
const	SELECT_LOC = 'SELECT_LOC';


let initialState = {
	config : {
		q:"",
		exp:[
						{
						id: "intern",
						selected : false,
						filter: "exp",
						name: "Intern"

					},
					{
						id:"junior",
						selected: false,
						filter: "exp",
						name: "Junior"
					},
					{
						id:"senior",
						selected: false,
						filter: "exp",
						name: "Senior" 
					},
					{
						id:"expert",
						selected: false,
						filter: "exp",
						name: "Expert"
					}
				],
		ds:[
					{
						id: "i_100",
						selected : false,
						filter: "ds",
						name: "100%"
					},
					{
						id:"m_95",
						selected: false,
						filter: "ds",
						name: "> 95%"
					},
					{
						id:"i_85_95",
						selected: false,
						filter: "ds",
						name: "85-95%" 
					},
					{
						id:"l_85",
						selected: false,
						filter: "ds",
						name: "< 85%"
					}
				],
		skill:[
					{
						id: "i_5",
						selected : false,
						filter: "skill",
						name: "Best (5)"
					},
					{
						id:"i_5_4",
						selected: false,
						filter: "skill",
						name: "5-4.6"
					},
					{
						id:"i_4",
						selected: false,
						filter: "skill",
						name: "4.6-4" 
					},
					{
						id:"l_4",
						selected: false,
						filter: "skill",
						name: "< 4"
					}
				],
		rate:[	
					{
						id: "ri_5",
						selected : false,
						filter: "rate",
						name: "Best (5)"
					},
					{
						id:"ri_5_4",
						selected: false,
						filter: "rate",
						name: "5-4.8"
					},
					{
						id:"ri_4",
						selected: false,
						filter: "rate",
						name: "4.8-4.5" 
					},
					{
						id:"rl_4",
						selected: false,
						filter: "rate",
						name: "< 4.5"
					}
				],
		avl:[	
					{
						id: "per_week_up_to_20",
						selected : false,
						filter: "avl",
						name: "< 20h"
					},
					{
						id:"per_week_30",
						selected: false,
						filter: "avl",
						name: "30h"
					},
					{
						id:"per_week_more_than_30",
						selected: false,
						filter: "avl",
						name: "> 30h" 
					},
					{
						id:"per_week_full_time",
						selected: false,
						filter: "avl",
						name: "Full Time"
					}
				],
		place:[	
					{
						id: "online",
						selected : false,
						filter: "place",
						name: "On-Line"
					},
					{
						id:"onsite",
						selected: false,
						filter: "place",
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
		payment:[	
					{
						id: "fixed_price",
						selected : false,
						name: "Fixed Price"
					},
					{
						id:"hourly",
						selected: false,
						name: "Hourly"
					}
				],
		bud:[	
					{
						name: "$0 - $100",
						selected : false,
						id: "i0_100"
					},
					{
						name:"$100 - $300",
						selected: false,
						id: "i100_300"
					},
					{
						name:"$300 - $1000",
						selected: false,
						id: "i300_1000"
					},
					{
						name:"> $1000",
						selected: false,
						id: "more_1000"
					},
					{
						id:"undefined",
						selected: false,
						name: "Not defined (Empty)"
					},
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
						name:"Full-Time",
						selected: false,
						id: "per_week_more_than_30" 
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

  export function selectAvl(id) {
		return dispatch => {
			dispatch({
				type: SELECT_AVL, 
				payload: id
			});
		};
	}
  export function selectExp(id) {
		return dispatch => {
			dispatch({
				type: SELECT_EXP, 
				payload: id
			});
		};
	}
  export function selectLang(id) {
		return dispatch => {
			dispatch({
				type: SELECT_LANG, 
				payload: id
			});
		};
	}
  export function selectLoc(id) {
		return dispatch => {
			dispatch({
				type: SELECT_LOC, 
				payload: id
			});
		};
	}
  export function selectSkill(id) {
		return dispatch => {
			dispatch({
				type: SELECT_SKILL, 
				payload: id
			});
		};
	}
  export function selectRate(id) {
		return dispatch => {
			dispatch({
				type: SELECT_RATE,
				payload: id
			});
		};
	}
  export function selectDs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_DS, 
				payload: id
			});
		};
	}
  export function selectPlace(id) {
		return dispatch => {
			dispatch({
				type: SELECT_PLACE, 
				payload: id
			});
		};
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
	[SELECT_RATE]: (state, action) => {//radio
		var copyObj = Object.assign({}, state.config)	
		copyObj.rate.map(item => {

			if (item.id === action.payload) {
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
			...state, 
			config: copyObj
	}
	},
	[SELECT_SKILL]: (state, action) => {//radio
		var copyObj = Object.assign({}, state.config)	
		copyObj.skill.map(item => {

			if (item.id === action.payload) {
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
			...state, 
			config: copyObj
	}
	},
	[SELECT_DS]: (state, action) => {//radio
		var copyObj = Object.assign({}, state.config)	
		copyObj.ds.map(item => {

			if (item.id === action.payload) {
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
			...state, 
			config: copyObj
	}
	},
	[SELECT_EXP]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.config)	
		copyObj.exp.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					config: copyObj
		}
	},   
	[SELECT_LANG]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.config)	
		copyObj.lang.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					config: copyObj
		}
	},   
	[SELECT_LOC]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.config)	
		copyObj.loc.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					config: copyObj
		}
	},   
	[SELECT_AVL]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.config)	
		copyObj.avl.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					config: copyObj
		}
	},   
	[SELECT_PLACE]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.config)	
		copyObj.place.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					config: copyObj
		}
	},   
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
		var objCopy = Object.assign({}, state.config);
		objCopy.lang.map(item => {
			item.filter = "lang";
			item.selected = false;
			item.id = "lang"+item.language_id;

		});
			return {
					...state, 
					config: state.config,
		}
	},   
	[GET_COUNTRIES]: (state, action) => {
		state.config.loc = action.payload;
		var objCopy = Object.assign({}, state.config);
		objCopy.loc.map(item => {
			item.filter = "loc";
			item.selected = false;
			item.id = "loc"+item.id;

		});
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