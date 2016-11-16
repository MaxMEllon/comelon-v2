import { fork, take, call, put, cancel } from 'redux-saga/effects';
import { modalSaga } from './modal';
import { userSaga } from './user';

export default function* rootSaga() {
  yield fork(modalSaga);
  yield fork(userSaga);
}
