import { call, put, takeEvery } from 'redux-saga/effects'
import { postReqShiftsApi } from '../../services/apiServices';

function* addRequestShift(action) {
   try {
      yield call(postReqShiftsApi, action.payload);
   } catch (e) {
      yield put({type: 'ADD_REQ_SHIFT_FAILED', message: e.message});
   }
}

function* requestShiftsSaga() {
   yield takeEvery('ADD_REQ_SHIFT_REQUESTED', addRequestShift);
}

export default requestShiftsSaga;