import { createSelector } from 'reselect';
import moment from 'moment';

export const getSelectedDate = state => state.calendar.selectedDate;
export const getVisits = state => state.visits.visits.filter(v => !v.sent);
export const getVisit = state => state.visit.visit;
export const getTask = state => state.task.task;
export const getConnection = state => state.network.isConnected;
export const getCurrentScreen = state => state.app.currentScreen;

export const getTabsVisits = createSelector(getSelectedDate, getVisits, (dateTime, visits) => {
  const date = moment(dateTime).startOf('day');
  const currentDay = new Date(date);
  const nextDay = date.add(1, 'day');

  const all = visits.filter(v => v.scheduled_at >= currentDay && v.scheduled_at < nextDay);
  const todo = visits.filter(v => v.scheduled_at >= currentDay && v.scheduled_at < nextDay && v.status === 'todo');
  const inProgress = visits.filter(
    v => v.scheduled_at >= currentDay && v.scheduled_at < nextDay && v.status === 'in_progress',
  );
  const done = visits.filter(v => v.scheduled_at >= currentDay && v.scheduled_at < nextDay && v.status === 'done');
  const cancelled = visits.filter(
    v => v.scheduled_at >= currentDay && v.scheduled_at < nextDay && v.status === 'cancelled' && !v.sent,
  );

  return { all, todo, inProgress, done, cancelled };
});