import * as type from '../types';

export function getSchedule(schedule) {
    return {
        type: type.GET_SCHEDULE_REQUESTED,
        payload: schedule,
    }
}

export function addToDbScheduledShifts(schedule) {
    return {
        type: type.ADD_SCHEDULE_REQUESTED,
        payload: schedule,
    }
}

export function addToDbReqShift(reqShiftForm) {
    return {
        type: type.ADD_REQ_SHIFT_REQUESTED,
        payload: reqShiftForm,
    }
}

export function getSubmittedShifts(submittedShifts) {
    return {
        type: type.GET_SUB_SHIFTS_REQUESTED,
        payload: submittedShifts,
    }
}

export function updateSubmittedShifts(submittedShifts) {
    return {
        type: type.UPDATE_SUB_SHIFTS_REQUESTED,
        payload: submittedShifts,
    }
}

export function setLoggedUser(loggedUser) {
    return {
        type: type.SET_LOGGED_USER,
        payload: loggedUser
    }
}