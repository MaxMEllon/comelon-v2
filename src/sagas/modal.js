import { fork, take, call, put, cancel } from 'redux-saga/effects';
import {
  showModal,
  hiddenModal,
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
    yield take(`${hiddenModal}`);
    yield put(hiddenModal());
  }
}

export function* modalSaga() {
  yield fork(handleShowModal);
  yield fork(handleHiddenModal);
}
