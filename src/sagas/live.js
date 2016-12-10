import { fork, take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  fetchConnect,
  recieveComment,
  fadeOutModal,
} from '../actions';
import { connectPromisfy } from '../utils/nicolive';

const x = undefined;

function connectChannel(socket) {
  return eventChannel((emit) => {
    socket.on('comment', (comment) => {
      emit(recieveComment({ comment }));
    });
    return () => {};
  });
}

export function* commentSage() {
  while (typeof x === 'undefined') {
    const { payload } = yield take(`${recieveComment}`);
    yield put(recieveComment(payload));
  }
}

export function* onConnect() {
  const { payload } = yield take(`${fetchConnect}`);
  const socket = yield call(connectPromisfy, payload.liveid);
  yield call(connectChannel, socket);
  yield put(fadeOutModal());
  yield fork(commentSage);
}

export function* liveSaga() {
  yield fork(onConnect);
}
