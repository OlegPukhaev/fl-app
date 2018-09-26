import Reactotron from 'reactotron-react-js';
import {getToken} from '../functions/config';
import axios from 'axios';
var configapi = getToken();

axios.defaults.headers.common['access-token'] = "NjSJexJN8cQCTRN-0Oj9SQ";
axios.defaults.headers.common['expiry'] = "1539153539";
axios.defaults.headers.common['token-type'] = "Bearer";
axios.defaults.headers.common['uid'] = "nuba818400@gmail.com";
axios.defaults.headers.common['client'] = "y0Hffjly56_06rlgJSpcdw";
// Reactotron.log("cookie", queryString.parse(token.authHeaders));

const queryString = require('query-string');
// import queryString from 'query-string';


axios.defaults.baseURL = 'https://floating-atoll-63112.herokuapp.com';


var token = queryString.parse(document.cookie)
// axios.defaults.headers.common['Authorization'] = {
//     "access-token":"NjSJexJN8cQCTRN-0Oj9SQ",
//     "token-type":"Bearer",
//     "client":"y0Hffjly56_06rlgJSpcdw",
//     "expiry":"1539153539",
//     "uid":"nuba818400@gmail.com"};




export function getData(urlApi) {
    console.log("fff"+token.authHeaders);
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