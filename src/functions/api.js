import {getToken} from '../functions/config';
import axios from 'axios';
var configapi = getToken;

export const CONFIG = axios.create({
    headers: {
        common: {
            'access-token' : configapi['access-token'],
            'expiry' : configapi['expiry'],
            'token-type' : configapi['token-type'],
            'uid' : configapi['uid'],
            'client' : configapi['client']
    
        }
    },
    baseURL : 'https://floating-atoll-63112.herokuapp'
});