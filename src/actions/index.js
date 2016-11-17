import { createAction } from 'redux-act';

export const showModal = createAction('SHOW_MODAL');
export const hiddenModal = createAction('HIDDEN_MODAL');

export const login = createAction('USER_LOGIN');
export const logout = createAction('USER_LOGOUT');
export const ping = createAction('USER_PING');

export const connect = createAction('LIVE_CONNECT');
export const recieveComment = createAction('RECIEVE_COMMENT');
