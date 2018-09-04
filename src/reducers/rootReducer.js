import { combineReducers } from 'redux';
import getUser from "./getUser";
import userSkills from "./skills";

export default combineReducers({
    user: getUser,
    skills: userSkills
})