import * as type from '../types';

const initialState = {
    msgs: [],
    loading: false,
    error: null,
    loggedUser: {}
}

export default function msgs(state = initialState, action) {
    switch (action.type) {
        
        case type.GET_MSGS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_MSGS_SUCCESS:
            return {
                ...state,
                loading: false,
                msgs: action.msgs
            }
        case type.SET_LOGGED_USER:
            return {
                ...state,
                loggedUser: action.loggedUser
            }
        case type.GET_MSGS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}