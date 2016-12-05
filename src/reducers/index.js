import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import ModalRecord, { ModalState } from '../records/modal';
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
    const record = new ModalRecord({ visible: ModalState.SHOW, childComponent });
    return state.merge(record);
  },
  [actions.fadeOutModal]: (state) => {
    const record = Immutable.Map({ visible: ModalState.FADEOUT });
    return state.merge(record);
  },
  [actions.hiddenModal]: (state) => {
    const record = new ModalRecord({ visible: ModalState.HIDE, childComponent: null });
    return state.merge(record);
  },
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

