import Reactotron from 'reactotron-react-js';
import axios from 'axios';
import {successMessage, warningMessage} from './function'; 
export const queryString = require('query-string');
export const API_SERVER_URL = "https://floating-atoll-63112.herokuapp.com";
export const API_URL = `${API_SERVER_URL}/api/v1`;

axios.defaults.headers.common = getCookies();
axios.defaults.baseURL = `${API_SERVER_URL}`;

export function fetchCountries(){
    return axios.get(`${API_URL}/misc/countries`)
    .then(response => {
        let dataObj = Object.assign({}, response);
        return dataObj
    });  
}  

export function fetchSkillsCatJobPost(){
    return axios.get(`${API_URL}/profile/skills`)
    .then(response => {
        let dataObj = Object.assign({}, response);
        // Reactotron.log("response" , response);
        console.log(response);
        return dataObj
    }).catch(error => {
        return "error";
    });  
}  

export function fetchLanguage(){
    return axios.get(`${API_URL}/misc/get_languages`)
    .then(response => {
        let dataObj = Object.assign({}, response);
        return dataObj
    });  
}  

export function fetchDefaultPromotions(value){
    return axios.get(`${API_URL}/profile/default_promotions`)
    .then(response => {
        return response;
    })
    .catch(error => {
      return "error";
    });
}    
export function fetchSkillTags(value){
    return axios.get(`${API_URL}/profile/skills/search?q=${value}`)
    .then(response => {
      var size = Object.keys(response.data.skills).length;
      console.log(size, response);
    //   if (size >> 0){
        return response;
    //   }
    })
    .catch(error => {
    //   console.log('my errors' , error);
      return "error";
    });
}    
  
export function fetchTellentsData(value, page=1){
    return axios.get(`${API_URL}/tellents/search?page=${page}&${value}`)
    .then(response => {
        let dataObj = Object.assign({}, response);
        return dataObj;
    }).catch(error => {
        return "error";
      });  
}

export function fetchJobsData(value, page=1){
    return axios.get(`${API_URL}/jobs/search?page=${page}&${value}`)
    .then(response => {
        let dataObj = Object.assign({}, response);
        return dataObj;
    }).catch(error => {
        return "error";
      });  
}

export function fetchUserSkills(value) {
	return axios.get(`${API_URL}/profile/skills/user?=${value}`)
		.then(response => {
			let dataObj = Object.assign({}, response);
			return dataObj;
		})
		.catch(function (error) {
			warningMessage('Ошибка сервера нету API данных');
			return false;
		});   
}

export function fetchSkillCategories (value) {
	return axios({
		method: 'post',
		url: `${API_URL}/profile/skills`,
		data: {
				categories : value
		}
	});
}

export function getCookies() {
	var tokenObject;
	if (document.cookie) {
		var tokenCookies = queryString.parse(document.cookie);
		return tokenObject = JSON.parse(tokenCookies.authHeaders);
	} else return "";
}

export function getData(urlApi) {
    // console.log("fff"+token.authHeaders);
    return axios.get(urlApi)
    .then(response => {
        let dataObj = Object.assign({}, response);
        return dataObj
    }).then(dataObj => {
        return dataObj;
        // return dataObj = "Урраа отсюда";
    }).catch(function (error) {
      console.log('my errors' , error);
    })
}

export function searchData(urlApi, ) {
    return axios.get(urlApi)
    .then(response => {
        let dataObj = Object.assign({}, response);
        return dataObj
    }).then(dataObj => {
        // Reactotron.log("Inner api resp", dataObj);
        return dataObj;
        // return dataObj = "Урраа отсюда";
    }).catch(function (error) {
      console.log('my errors' , error);
    })
}

export default getData;