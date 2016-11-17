import React from 'react';
import './LoginFrom.css';
import { Button } from './Button';
import {
  login,
  logout,
  hiddenModal,
} from '../actions';

const onLogin = (e, dispatch) => {
  e.preventDefault();
  dispatch(login({
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }));
};

const onReset = (e) => {
  e.preventDefault();
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
};

const renderLoginForm = dispatch => (
  <div className="login-page">
    <h2>ログイン</h2>
    <hr />
    <div className="email">
      <label>メールアドレス</label>
      <input id="email" type="text" />
    </div>
    <br />
    <div className="password">
      <label>パスワード</label>
      <input id="password" type="password" />
    </div>
    <hr />
    <div className="button-group" style={{ textAlign: 'right' }}>
      <Button
        type="danger"
        content="リセット"
        onClick={onReset}
      />
      <Button
        content="ログインする"
        onClick={e => onLogin(e, dispatch)}
      />
    </div>
  </div>
);

const onLogout = (e, dispatch) => {
  e.preventDefault();
  dispatch(logout());
};

const onHiddenModal = (e, dispatch) => {
  e.preventDefault();
  dispatch(hiddenModal());
};

const renderLogoutForm = dispatch => (
  <div className="logout-page">
    <h2>ログアウトしますか？</h2>
    <hr />
    <div className="button-group" style={{ textAlign: 'right' }}>
      <Button
        type="danger"
        content="いいえ"
        onClick={e => onHiddenModal(e, dispatch)}
      />
      <Button
        content="はい"
        onClick={e => onLogout(e, dispatch)}
      />
    </div>
  </div>
);

export const LoginForm = ({ dispatch, isLogin }) => isLogin === true ? renderLogoutForm(dispatch) : renderLoginForm(dispatch);
