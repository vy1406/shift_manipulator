import { combineReducers } from 'redux';
import users from './users';
import schedule from './schedule';
import requestShifts from './requestShifts'
import submittedShifts from './submittedShifts';

const rootReducer = combineReducers({
    users: users,
    schedule: schedule,
    requestShifts: requestShifts,
    submittedShifts: submittedShifts,
});

export default rootReducer;