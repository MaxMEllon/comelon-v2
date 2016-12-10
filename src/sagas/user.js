import { fork, take, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  loginPromisfy,
  logoutPromisfy,
} from '../utils/nicolive';

import {
  fetchLogin,
  successLogin,
  failLogin,
  fetchLogout,
  fadeOutModal,
} from '../actions';

const x = undefined;

export function* handleLogout() {
  while (typeof x === 'undefined') {
    yield take(`${fetchLogout}`);
    try {
      yield call(logoutPromisfy);
      yield put(fetchLogout({ cookie: '', isLogin: false }));
      yield put(fadeOutModal());
    } catch (error) {
      // retry logout
      yield delay(100);
      yield put(fetchLogout());
    }
  }
}

export function* handleLogin() {
  while (typeof x === 'undefined') {
    const { payload } = yield take(`${fetchLogin}`);
    try {
      const cookie = yield call(loginPromisfy, payload);
      yield put(successLogin(cookie));
    } catch (error) {
      yield put(failLogin());
    } finally {
      yield put(fadeOutModal());
    }
  }
}

export function* userSaga() {
  yield fork(handleLogin);
  yield fork(handleLogout);
}
