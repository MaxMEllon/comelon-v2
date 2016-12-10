import { fork, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  hiddenModal,
  fadeOutModal,
} from '../actions';

const x = undefined;

export function* handleHiddenModal() {
  while (typeof x === 'undefined') {
    yield take(`${fadeOutModal}`);
    yield delay(500);
    yield put(hiddenModal());
  }
}

export function* modalSaga() {
  yield fork(handleHiddenModal);
}
