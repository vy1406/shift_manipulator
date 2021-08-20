import * as type from '../types';

const initialState = {
    msgs: [],
    loading: false,
    error: null,
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