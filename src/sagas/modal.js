import { fork, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  showModal,
  hiddenModal,
  fadeOutModal,
} from '../actions';

const x = undefined;

export function* handleShowModal() {
  while (typeof x === 'undefined') {
    const { payload } = yield take(`${showModal}`);
    yield put(showModal(payload));
  }
}

export function* handleHiddenModal() {
  while (typeof x === 'undefined') {
    yield take(`${fadeOutModal}`);
    yield delay(500);
    yield put(hiddenModal());
  }
}

export function* modalSaga() {
  yield fork(handleShowModal);
  yield fork(handleHiddenModal);
}
