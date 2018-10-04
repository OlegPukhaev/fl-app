import { createSelector } from 'reselect';


export const isUserLogin = state => state.user.isUserLogin;
export const activeWin = state => state.skills.activeWin;
export const backWindow = state => state.skills.backWindow;
export const addSkillId = state => state.skills.addSkillId;
export const getAllSkillData = state => state.skills.skillsdata;
export const addCategories = state => state.skills.addCategories;
export const emptyInput = state => state.skills.emptyInput;
export const getShowSkillTagWin = state => state.skills.showSkillTagWin;
export const getSkillData = state => state.skills.skillsdata.filter(item => item.selected);
export const getActiveCategories = state => state.skills.skillsdata.filter(item => item.selected);
//  (v => !v.sent);


export const jobsData = state => state.search.jobsData;
export const tellentsData = state => state.search.tellentsData;
export const totalCount = state => state.search.totalCount;
export const isTellents = state => state.search.isTellents;
export const isJobs = state => state.search.isJobs;
export const configTellents = state => state.search.config;
export const configJobs = state => state.search.configJobs;
export const showJobs = state => state.search.showJobs;
export const showTellents = state => state.search.showTellents;

export const currentTellentsPage = state => state.search.currentTellentsPage;
export const currentJobsPage = state => state.search.currentJobsPage;

export const modalWinToggler = state => state.jobs.modalWinToggler;
export const title = state => state.jobs.title;
export const description = state => state.jobs.description;
export const skillConfig = state => state.jobs.config;
export const isSkillSelected = state => state.jobs.isSkillSelected;





