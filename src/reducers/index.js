import _ from 'lodash';
import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import ModalRecord from '../records/modal';
import UserRecord from '../records/user';
import CommentRecord from '../records/comment';

const initialState = {
  comments: Immutable.List(),
  user: new UserRecord(),
  modal: new ModalRecord(),
};

const modal = createReducer({
  [actions.showModal]: (state, payload) => {
    const { childComponent } = payload;
    const record = new ModalRecord({ visible: true, childComponent });
    return state.merge(record);
  },
  [actions.hiddenModal]: state => state.merge(initialState.modal),
}, initialState.modal);

const user = createReducer({
  [actions.login]: (state, cookie) => {
    if (cookie) {
      const record = new UserRecord(cookie);
      record.login(cookie);
      return state.merge(record);
    }
  },
  [actions.logout]: (state) => {
    const record = new UserRecord();
    record.logout();
    return state.merge(record);
  },
}, initialState.user);

const comments = createReducer({
  [actions.qecieveComment]: (state, payload) => {
    const record = new CommentRecord();
    // TODO: set payload
    return state.comments.push(record);
  },
}, initialState.comments);

export default combineReducers(
  {
    modal,
    user,
    comments,
  },
);

