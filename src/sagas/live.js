import { fork, take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { recieveComment } from '../actions';
import { connectPromisfy } from '../utils';

const x = undefined;

function connectChannel(socket) {
  return eventChannel((emit) => {
    const onRecieve = () => {
      socket.on('comment', (comment) => {
        emit(recieveComment({ comment }));
      });
    };
    return () => {};
  });
}

export function* onConnect() {
  const socket = yield call(connectPromisfy);
  const channel = yield call(connectChannel, socket);
  while (typeof x === 'undefined') {
    const { payload } = yield take(`${recieveComment}`);
    yield put(recieveComment(payload));
  }
}

export function* liveSaga() {
  yield fork(onConnect);
}
