import React from 'react';
import './LoginFrom.css';
import { Button } from './Button';
import { login } from '../actions';

const onLogin = (e, dispatch) => {
  e.stopPropagation();
  dispatch(login({
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }))
};

const onReset = (e) => {
  e.stopPropagation();
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
};

const onStopEvent = (e) =>  e.stopPropagation();

const renderLoginForm = (dispatch) => (
  <div onClick={onStopEvent} className="login-page">
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
        onClick={(e) => onLogin(e, dispatch)}
      />
    </div>
  </div>
);

const renderLogoutForm = (dispatch) => (
  <div className="logout-page">
    <h2>ログアウトしますか？</h2>
    <hr />
    <div className="button-group" style={{ textAlign: 'right' }}>
      <Button type="danger" content="いいえ" />
      <Button content="はい" />
    </div>
  </div>
);

export const LoginForm = ({ dispatch, isLogin }) => {
  if (isLogin) {
    return renderLogoutForm(dispatch);
  } else {
    return renderLoginForm(dispatch);
  }
};
