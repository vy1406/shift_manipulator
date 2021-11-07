import * as type from '../types';

const initialState = {
    submittedShifts: [],
    loading: false,
    error: null,
}

export default function submittedShifts(state = initialState, action) {
    switch (action.type) {
        case type.GET_SUB_SHIFTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_SUB_SHIFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                submittedShifts: action.submittedShifts
            }
        case type.GET_SUB_SHIFTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        case type.UPDATE_SUB_SHIFTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.UPDATE_SUB_SHIFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                submittedShifts: action.submittedShifts
            }
        case type.UPDATE_SUB_SHIFTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}