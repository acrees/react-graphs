//import thunkMiddleware from 'redux-thunk';
import React from 'react'
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.jsx';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  //thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

const defaultState = {f: "0.001*x*x + 5"};
const reducer = function (state = defaultState, e) {
  switch(e.type) {
    case 'update':
      return { f: e.f };
    default:
      return state;
  }
}

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('app-container')
);
