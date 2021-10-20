import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import scheduleSaga from './scheduleSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    scheduleSaga(),
  ])
}