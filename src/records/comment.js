import { Record } from 'immutable';
import { autoBind } from '../utils/binder';

const defaultValue = {
  user: '184',
  vpos: 0,
  text: '',
  avetor: null,
  isPremium: false,
};

export default class CommentRecord extends Record(defaultValue) {
  constructor(payload = defaultValue) {
    super(payload);
    autoBind(this);
  }

  setPayLoad({ user, vpos, text, avator, isPremium }) {
    this.set('user', payload.user);
  }
}
