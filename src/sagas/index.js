import { fork } from 'redux-saga/effects';
import { modalSaga } from './modal';
import { userSaga } from './user';
import { liveSaga } from './live';

export default function* rootSaga() {
  yield fork(modalSaga);
  yield fork(userSaga);
  yield fork(liveSaga);
}
