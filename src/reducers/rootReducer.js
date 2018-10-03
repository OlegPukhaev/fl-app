import { combineReducers } from 'redux';
import getUser from "./getUser";
import userSkills from "./userSkills";
import search from './search';
import jobs from './jobs';

export default combineReducers({
    user: getUser,
    skills: userSkills,
    search:search,
    jobs: jobs
})