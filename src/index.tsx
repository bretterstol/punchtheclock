import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import Main from './Containers/Main';
import * as serviceWorker from './serviceWorker';

import combinedReducer from './Store';
import time from './Store/WorkClock/saga';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(combinedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(time);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
