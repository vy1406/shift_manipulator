import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import scheduleSaga from './scheduleSaga'
import requestShiftsSaga from './requestShiftsSaga'
import submittedShiftsSaga from './submittedShiftsSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    scheduleSaga(),
    requestShiftsSaga(),
    submittedShiftsSaga(),
  ])
}