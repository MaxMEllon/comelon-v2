import { Record } from 'immutable';
import autoBind from '../utils/binder';

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

  setByPayLoad({ user, vpos, text, avator, isPremium }) {
    this.set('user', user);
    this.set('vpos', vpos);
    this.set('text', text);
    this.set('avator', avator);
    this.set('isPremium', isPremium);
  }
}
