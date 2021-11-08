import * as type from '../types';

const initialState = {
    requestShifts: [],
    loading: false,
    error: null,
}

export default function requestShifts(state = initialState, action) {
    switch (action.type) {
        case type.ADD_REQ_SHIFT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.ADD_REQ_SHIFT_SUCCESS:
            return {
                ...state,
                loading: false,
                requestShifts: action.requestShifts
            }
        case type.ADD_REQ_SHIFT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}