import { fork, take, call, put, cancel } from 'redux-saga/effects';

import {
  loginPromisfy
} from '../utils/nicolive';

import {
  login,
  logout,
  hiddenModal,
} from '../actions';

const x = undefined;

export function* handleLogin() {
  while (typeof x === 'undefined') {
    const { payload } = yield take(`${login}`);
    const cookie = yield call(loginPromisfy, payload);
    yield put(hiddenModal());
    yield put(login(cookie));
  }
}

export function* userSaga() {
  yield fork(handleLogin);
}
