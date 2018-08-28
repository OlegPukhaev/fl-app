import { combineReducers } from 'redux';
import getUser from "./getUser";


export default combineReducers({
    user: getUser
})