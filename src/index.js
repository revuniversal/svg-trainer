// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { init } from '@rematch/core';
import * as models from './models';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const rootId = 'root';
const rootElement = document.getElementById(rootId);

if (rootElement == null) {
  throw new Error('Could not find element with id: ' + rootId);
}

const store = init({ models });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
registerServiceWorker();
