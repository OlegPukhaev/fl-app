import Reactotron from 'reactotron-react-js';
import {getToken} from '../functions/config';
import axios from 'axios';
var configapi = getToken();
axios.defaults.headers.common['access-token'] = configapi['access-token'];
axios.defaults.headers.common['expiry'] = configapi['expiry'];
axios.defaults.headers.common['token-type'] = configapi['token-type'];
axios.defaults.headers.common['uid'] = configapi['uid'];
axios.defaults.headers.common['client'] = configapi['client'];
axios.defaults.baseURL = 'https://floating-atoll-63112.herokuapp.com';

export function getData(urlApi) {
    return axios.get(urlApi)
    .then(response => {
        let dataObj = Object.assign({}, response);
        return dataObj
    }).then(dataObj => {
        Reactotron.log("Inner api resp", dataObj);
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
        Reactotron.log("Inner api resp", dataObj);
        return dataObj;
        // return dataObj = "Урраа отсюда";
    }).catch(function (error) {
      console.log('my errors' , error);
    })
}

export default getData;