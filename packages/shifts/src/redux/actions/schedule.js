import * as type from '../types';

export function getSchedule(schedule) {
    return {
        type: type.GET_SCHEDULE_REQUESTED,
        payload: schedule,
    }
}

export function setLoggedUser(loggedUser) {
    return {
        type: type.SET_LOGGED_USER,
        payload: loggedUser
    }
}