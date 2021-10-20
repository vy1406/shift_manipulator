import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import scheduleSaga from './scheduleSaga'
import requestShiftsSaga from './requestShiftsSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    scheduleSaga(),
    requestShiftsSaga(),
  ])
}