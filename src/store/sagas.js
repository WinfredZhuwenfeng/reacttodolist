import { put, takeEvery } from 'redux-saga/effects';
import { SAGAS_INIT_TODO_LIST } from './actionTypes.js';
import { getInitListAction } from './actionCreaters.js';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('/list.json');
    const action = getInitListAction(res.data);
    yield put(action);
  }catch(e) {
    console.log(e)
  }
}

function* mySaga() {
  yield takeEvery(SAGAS_INIT_TODO_LIST, getInitList);
}

export default mySaga;
