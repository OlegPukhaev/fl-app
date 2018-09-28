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