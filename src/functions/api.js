import {getToken} from '../functions/config';
import axios from 'axios';

export function getData(urlApi) {
    var configapi = getToken();
    axios.defaults.headers.common['access-token'] = configapi['access-token'];
    axios.defaults.headers.common['expiry'] = configapi['expiry'];
    axios.defaults.headers.common['token-type'] = configapi['token-type'];
    axios.defaults.headers.common['uid'] = configapi['uid'];
    axios.defaults.headers.common['client'] = configapi['client'];
    axios.defaults.baseURL = 'https://floating-atoll-63112.herokuapp.com';
  
    axios.get(urlApi)
    .then(response => {
        return response;
    })
    .catch(function (error) {
      console.log('my errors' , error);
      return false;
    }); 
}

export default getData;