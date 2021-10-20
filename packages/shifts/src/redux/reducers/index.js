import { combineReducers } from 'redux';
import users from './users';
import schedule from './schedule';

const rootReducer = combineReducers({
    users: users,
    schedule: schedule,
});

export default rootReducer;