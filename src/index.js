import 'babel-polyfill';
import 'reset.css/reset.css';
import 'animate.css/animate.css';
import 'react-fa';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import Comelon from './containers/Comelon';

const store = createStore();

window.onload = function () {
  ReactDOM.render(
    <Provider store={store}>
      <Comelon />
    </Provider>,
    document.getElementById('main'),
  );
};
