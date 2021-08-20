import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import msgSaga from './msgSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    msgSaga(),
  ])
}