import * as type from '../types';

export function getUsers(users) {
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}

export function addToDbUser(formUser) {
    return {
        type: type.ADD_USER_REQUESTED,
        payload: formUser,
    }
}