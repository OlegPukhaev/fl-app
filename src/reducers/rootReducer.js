import { combineReducers } from 'redux';
import getUser from "./getUser";
import userSkills from "./userSkills";

export default combineReducers({
    user: getUser,
    skills: userSkills
})