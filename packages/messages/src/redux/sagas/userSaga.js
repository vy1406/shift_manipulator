import { call, put, takeEvery } from 'redux-saga/effects'
import { getUsersApi, postUsersApi } from '../../services/apiServices';

function* fetchUsers(action) {
   try {
      const users = yield call(getUsersApi);
      yield put({type: 'GET_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}

function* addUser(action) {
   try {
      yield call(postUsersApi, action.payload);
      yield fetchUsers();
   } catch (e) {
      yield put({type: 'ADD_USER_FAILED', message: e.message});
   }
}

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
   yield takeEvery('ADD_USER_REQUESTED', addUser);
}

export default userSaga;