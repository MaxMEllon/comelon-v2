import _ from 'lodash';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';

const initialState = {
  comments: [],
  user: {
    isLogin: localStorage.getItem('isLogin') === 'true',
  },
  modal: {
    visible: false,
  },
};

const modal = createReducer({
  [actions.showModal]: (state, payload) => {
    return { ...state, visible: true, childComponent: payload.childComponent };
  },
  [actions.hiddenModal]: (state, payload) => {
    return { ...state, visible: false };
  }
}, initialState.modal);

const user = createReducer({
  [actions.login]: (state, cookie) => {
    if (cookie) {
      localStorage.setItem('isLogin', 'true');
      return { ...state, cookie, isLogin: true };
    }
  }
}, initialState.user);

export default combineReducers(
  {
    modal,
    user,
  }
);

