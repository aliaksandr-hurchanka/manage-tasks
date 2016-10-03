import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {getAppRoutes} from './app/routes';
import configureStore from './app/store'

const store = configureStore();

const initApplication = function () {

    ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory} routes={getAppRoutes()} />
        </Provider>,
        document.getElementById('root-app')
    );
};

initApplication();
