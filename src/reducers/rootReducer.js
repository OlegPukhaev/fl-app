import { combineReducers } from 'redux';
import getUser from "./getUser";
import userSkills from "./userSkills";
import search from './search';

export default combineReducers({
    user: getUser,
    skills: userSkills,
    search:search
})