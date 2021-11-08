import { call, put, takeEvery } from 'redux-saga/effects'
import { getUsersApi } from '../../services/apiServices';

function* fetchUsers(action) {
   try {
      const users = yield call(getUsersApi);
      yield put({type: 'GET_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;