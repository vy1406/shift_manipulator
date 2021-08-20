import { combineReducers } from 'redux';
import users from './users';
import msgs from './msgs';

const rootReducer = combineReducers({
    users: users,
    msgs: msgs,
});

export default rootReducer;