import Reactotron from 'reactotron-react-js';
import {getToken} from '../functions/config';
import axios from 'axios';
// var configapi = getToken();
import queryString from 'query-string';
// const queryString = require('query-string');

axios.defaults.headers.common = tokobj;
axios.defaults.baseURL = 'https://floating-atoll-63112.herokuapp.com';

var token = queryString.parse(document.cookie);
var tokenParsed = JSON.parse(token.authHeaders);

const tokobj = tokenParsed;





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