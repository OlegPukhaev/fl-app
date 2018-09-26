import Reactotron from 'reactotron-react-js';
import axios from 'axios';
export const queryString = require('query-string');
export const API_SERVER_URL = "https://floating-atoll-63112.herokuapp.com";
export const API_URL = `${API_SERVER_URL}/api/v1/`;
if (document.cookie) {
	var cookies = document.cookie
}

if (document.cookie) {
	var TOKEN_COOKIES = queryString.parse(document.cookie);
	var TOKEN_CONFIG = JSON.parse(TOKEN_COOKIES.authHeaders);
	axios.defaults.headers.common = TOKEN_CONFIG;
	axios.defaults.baseURL = `${API_SERVER_URL}`;
}

// Reactotron.log("какое значение у куки", document.cookies);
// var tokenParsed = JSON.parse(token.authHeaders);
// const tokobj = tokenParsed;




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