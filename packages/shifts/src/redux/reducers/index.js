import { combineReducers } from 'redux';
import users from './users';
import schedule from './schedule';
import requestShifts from './requestShifts'

const rootReducer = combineReducers({
    users: users,
    schedule: schedule,
    requestShifts: requestShifts,
});

export default rootReducer;