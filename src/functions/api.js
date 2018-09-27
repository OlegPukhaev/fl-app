import Reactotron from 'reactotron-react-js';
import axios from 'axios';
import {successMessage, warningMessage} from './function'; 
export const queryString = require('query-string');
export const API_SERVER_URL = "https://floating-atoll-63112.herokuapp.com";
export const API_URL = `${API_SERVER_URL}/api/v1`;

// if (document.cookie) {
	// var TOKEN_CONFIG = JSON.parse(TOKEN_COOKIES.authHeaders);
	// TOKEN_CONFIG = JSON.parse(TOKEN_COOKIES.authHeaders);
	axios.defaults.headers.common = getCookies();
	// axios.defaults.headers.common = {
	// 	"access-token": "Qf94aUklyCtSxI6mxjrvdg",
	// 	"client": "Iurys7MAi6X5MYaMiislyw",
	// 	"expiry": "1539251530",
	// 	"token-type": "Bearer",
	// 	"uid": "nuba818400@gmail.com"
	// }
	console.log("Кукеш",getCookies());
	axios.defaults.baseURL = `${API_SERVER_URL}`;
// }

export function fetchUserSkills() {
	return axios.get(`${API_URL}/profile/skills/user`)
		.then(response => {
			let dataObj = Object.assign({}, response);
			return dataObj;
		})
		.catch(function (error) {
			warningMessage('Ошибка сервера нету API данных');
			return false;
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
        // Reactotron.log("Inner api resp", dataObj);
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