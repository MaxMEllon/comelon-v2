import { createAction } from 'redux-act';

// modal
export const showModal = createAction('SHOW_MODAL');
export const fadeOutModal = createAction('FADE_OUT_MODAL');
export const hiddenModal = createAction('HIDDEN_MODAL');

// login
export const fetchLogin = createAction('FETCH_USER_LOGIN');
export const successLogin = createAction('SUCCESS_USER_LOGIN');
export const failLogin = createAction('FAIL_USER_LOGIN');

// logout
export const fetchLogout = createAction('FETCHH_USER_LOGOUT');
export const successLogout = createAction('SUCCESS_USER_LOGOUT');
// export const failLogout = createAction('FAIL_USER_LOGOUT');

export const ping = createAction('USER_PING');

// connect
export const fetchConnect = createAction('FETCH_LIVE_CONNECT');
export const successConnect = createAction('SUCCESS_LIVE_CONNECT');
// export const failConnect = createAction('FAIL_LIVE_CONNECT');

export const recieveComment = createAction('RECIEVE_COMMENT');
