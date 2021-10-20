import * as type from '../types';

const initialState = {
    schedule: [],
    loading: false,
    error: null,
    loggedUser: {}
}

export default function schedule(state = initialState, action) {
    switch (action.type) {
        case type.GET_SCHEDULE_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_SCHEDULE_SUCCESS:
            return {
                ...state,
                loading: false,
                schedule: action.schedule
            }
        case type.SET_LOGGED_USER:
            return {
                ...state,
                loggedUser: action.loggedUser
            }
        case type.GET_SCHEDULE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}