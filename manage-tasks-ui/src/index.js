import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import { Route, Router, createBrowserHistory } from 'react-router';
import HomePage from './pages/home-page/';

let bh = createBrowserHistory({queryKey: false})

ReactDOM.render(
    <Router history={ bh }>
        <Route path='/' component={HomePage} />
    </Router>,
    document.getElementById('root')
)
