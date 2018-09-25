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

const	SELECT_EXP_JOBS = 'SELECT_EXP_JOBS';
const	SELECT_POST_JOBS = 'SELECT_POST_JOBS';
const	SELECT_PLACE_JOBS = 'SELECT_PLACE_JOBS';
const	SELECT_AVL_JOBS = 'SELECT_AVL_JOBS';
const	SELECT_LANG_JOBS = 'SELECT_LANG_JOBS';
const	GET_LANGUAGE_JOBS = 'GET_LANGUAGE_JOBS';
const	GET_COUNTRIES_JOBS = 'GET_COUNTRIES_JOBS';
const	SELECT_LOC_JOBS = 'SELECT_LOC_JOBS';
const	SELECT_PROP_JOBS = 'SELECT_PROP_JOBS';

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
					id: "jintern",
					request: "intern",
					selected : false,
					filter: "exp1",
					name: "Intern"
				},
				{
					id:"jjunior",
					request:"junior",
					selected: false,
					filter: "exp1",
					name: "Junior"
				},
				{
					id:"jsenior",
					request:"senior",
					selected: false,
					filter: "exp1",
					name: "Senior" 
				},
				{
					id:"jexpert",
					request:"expert",
					selected: false,
					filter: "exp1",
					name: "Expert"
				}
			],
		post:[
				{
					id: "ji24",
					request: "i24",
					selected : false,
					filter: "post",
					name: "24h"
				},
				{
					id:"ji3d",
					request:"i3d",
					selected: false,
					filter: "post",
					name: "3d"
				},
				{
					id:"ji1w",
					request:"i1w",
					selected: false,
					filter: "post",
					name: "1w" 
				},
				{
					id:"jm_1w",
					request:"m_1w",
					selected: false,
					filter: "post",
					name: "> 1w"
				}
			],
		prop:[
				{
					id: "ji0_5",
					selected : false,
					filter: "prop",
					request: "i0_5",
					name: "0 - 5"
				},
				{
					id:"ji5_10",
					selected: false,
					filter: "prop",
					request: "i5_10",
					name: "5 - 10"
				},
				{
					id:"ji10_20",
					request:"i10_20",
					selected: false,
					filter: "prop",
					name: "10 - 20" 
				},
				{
					id:"jm_20",
					request:"m_20",
					selected: false,
					filter: "prop",
					name: "> 20"
				},
				{
					id:"jundefined",
					request:"undefined",
					selected: false,
					filter: "prop",
					name: "None"
				}
			],
		payment:[	
					{
						id: "fixed_price",
						selected : false,
						filter: "payment",
						request: "fixed_price", 
						name: "Fixed Price"
					},
					{
						id:"hourly",
						selected: false,
						filter: "payment",
						request: "hourly", 
						name: "Hourly"
					}
				],
		bud:[	
					{
						name: "$0 - $100",
						selected : false,
						filter: "bud",
						request: "i0_100",
						id: "i0_100"
					},
					{
						name:"$100 - $300",
						filter: "bud",
						selected: false,
						request: "i100_300",
						id: "i100_300"
					},
					{
						name:"$300 - $1000",
						selected: false,
						filter: "bud",
						request: "i300_1000",
						id: "i300_1000"
					},
					{
						name:"> $1000",
						selected: false,
						filter: "bud",
						request: "more_1000",
						id: "more_1000"
					},
					{
						id:"undefined",
						selected: false,
						filter: "bud",
						request: "undefined",
						name: "Not defined (Empty)"
					},
				],
		avl:[	
					{
						id: "jper_week_10",
						request: "per_week_10",
						selected : false,
						filter: "avl",
						name: "< 20h"
					},
					{
						id:"jper_week_up_to_30",
						request:"per_week_up_to_30",
						filter: "avl",
						selected: false,
						name: "> 20h"
					},
					{
						name:"Full-Time",
						selected: false,
						filter: "avl",
						id: "jper_week_more_than_30" ,
						request: "per_week_more_than_30" 
					},
					{
						id:"jdecide_later",
						request:"decide_later",
						selected: false,
						filter: "avl",
						name: "Undefined"
					}
				],
		place:[	
					{
						id: "jonline",
						request: "online",
						selected : false,
						filter: "place",
						name: "On-Line"
					},
					{
						id:"jonsite",
						request:"onsite",
						selected: false,
						filter: "place",
						name: "On-Site"
					}
				],
		lang:[],
		loc:[],
		},
		requestTellents : {
			q:"",
			exp:{},
			ds:{},
			skill:{},
			rate:{},
			avl:{},
			place:{},
			lang:{},
			loc:{},
		},
		isTellents:false,
		isJobs:true,
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

	export function getCountriesJobs(value) {
		return dispatch => {
			dispatch({
				type: GET_COUNTRIES_JOBS, 
				payload: value
			});
		};
	}
	export function getLanguageJobs(value) {
		return dispatch => {
			dispatch({
				type: GET_LANGUAGE_JOBS, 
				payload: value
			});
		};
	}		
	export function selectExpJobs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_EXP_JOBS, 
				payload: id
			});
		};
	}
	export function selectPostJobs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_POST_JOBS, 
				payload: id
			});
		};
	}
	export function selectPlaceJobs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_PLACE_JOBS, 
				payload: id
			});
		};
	}
	export function selectAvlJobs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_AVL_JOBS, 
				payload: id
			});
		};
	}
	export function selectLangJobs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_LANG_JOBS, 
				payload: id
			});
		};
	}
	export function selectLocJobs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_LOC_JOBS, 
				payload: id
			});
		};
	}
	export function selectPropJobs(id) {
		return dispatch => {
			dispatch({
				type: SELECT_PROP_JOBS, 
				payload: id
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
			// item.id = "lang"+item.language_id;
			item.id = item.name;
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
			item.id = item.name;

		});
			return {
					...state, 
					config: state.config,
					configJobs: state.configJobs
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
	},
	[SELECT_EXP_JOBS]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.configJobs)	
		copyObj.exp.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					configJobs: copyObj
		}
	},  
	[SELECT_POST_JOBS]: (state, action) => {//radio
		var copyObj = Object.assign({}, state.configJobs)	
		copyObj.post.map(item => {

			if (item.id === action.payload) {
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
			...state, 
			configJobs: copyObj
	}
	}, 
	[SELECT_PLACE_JOBS]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.configJobs)	
		copyObj.place.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					configJobs: copyObj
		}
	}, 
	[SELECT_AVL_JOBS]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.configJobs)	
		copyObj.avl.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					configJobs: copyObj
		}
	}, 
	[SELECT_LANG_JOBS]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.configJobs)	
		copyObj.lang.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					configJobs: copyObj
		}
	}, 
	[GET_LANGUAGE_JOBS]: (state, action) => {
		state.configJobs.lang = action.payload.languages;
		var objCopyJobs = Object.assign({}, state.configJobs);
		objCopyJobs.lang.map(item => {
			item.filter = "lang";
			item.selected = false;
			item.id = "j"+item.language_id;
			item.request = item.name;
		});
			return {
					...state, 
					configJobs: objCopyJobs
		}
	},  
	[GET_COUNTRIES_JOBS]: (state, action) => {
		state.configJobs.loc = action.payload;
		var objCopy = Object.assign({}, state.configJobs);
		objCopy.loc.map(item => {
			item.filter = "loc";
			item.selected = false;
			item.id = "j"+item.name;
			item.request = item.name;
		});
			return {
					...state, 
					config: state.config,
					configJobs: state.configJobs
		}
	}, 
	[SELECT_LOC_JOBS]: (state, action) => {//checker
		var copyObj = Object.assign({}, state.configJobs)	
		copyObj.loc.map(item => {
			if (item.id === action.payload) {
						if(item.selected === true) {
						item.selected = false;
						}	else item.selected = true;
			}
		});
		return {
					...state, 
					configJobs: copyObj
		}
	}, 
	[SELECT_PROP_JOBS]: (state, action) => {//radio
		var copyObj = Object.assign({}, state.configJobs)	
		copyObj.prop.map(item => {
			if (item.id === action.payload) {
				if(item.selected === true) {
					item.selected = false;
					}	else item.selected = true;
			} else item.selected = false;
		});
		return {
			...state, 
			configJobs: copyObj
		}
	}
}


export default function search(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
  }