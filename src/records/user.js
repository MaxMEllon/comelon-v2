import { Record } from 'immutable';
import autoBind from '../utils/binder';

const defaultValue = {
  isLogin: localStorage.getItem('isLogin') === 'true',
  cookie: localStorage.getItem('cookie') || '',
};

export default class UserRecord extends Record(defaultValue) {
  constructor(cookie = '') {
    super({ cookie });
    this.setLoginState(this.cookie !== '');
    autoBind(this);
  }

  login(cookie) {
    localStorage.setItem('isLogin', 'true');
    this.set('isLogin', true);
    this.setCookie(cookie);
  }

  logout() {
    localStorage.setItem('isLogin', 'false');
    this.set('isLogin', false);
    this.resetCookie();
  }

  setLoginState(state) {
    localStorage.setItem('isLogin', state);
    this.set('isLogin', state);
  }

  setCookie(cookie) {
    localStorage.setItem('cookie', cookie);
    this.set('cookie', cookie);
  }

  resetCookie() {
    localStorage.setItem('cookie', '');
    this.set('cookie', '');
  }
}
