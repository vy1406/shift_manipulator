import { call, put, takeEvery } from 'redux-saga/effects'
import { getScheduleApi } from '../../services/apiServices';

function* fetchSchedule(action) {
   try {
      const schedule = yield call(getScheduleApi);
      yield put({type: 'GET_SCHEDULE_SUCCESS', schedule: schedule});
   } catch (e) {
      yield put({type: 'GET_SCHEDULE_FAILED', message: e.message});
   }
}

function* addShiftsToSchedule(action) {
   try {
      yield call(postScheduledShiftsApi, action.payload);
      // yield addRequestShift();
   } catch (e) {
      yield put({type: 'ADD_SCHEDULE_FAILED', message: e.message});
   }
}

function* scheduleSaga() {
   yield takeEvery('GET_SCHEDULE_REQUESTED', fetchSchedule);
   yield takeEvery('ADD_SCHEDULE_REQUESTED', addShiftsToSchedule);
}

export default scheduleSaga;