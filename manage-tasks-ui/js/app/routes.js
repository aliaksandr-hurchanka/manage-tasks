import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import { Route, Router, browserHistory, IndexRoute, Link } from 'react-router';
import HomePage from './pages/home-page/';
import DashboardPage from './pages/dashboard-page/';
import AboutPage from './pages/about-page/';
import NotFoundPage from './pages/not-found-page';

export function getAppRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path='dashboard' component={DashboardPage} />
            <Route path='about' component={AboutPage} />
        </Route>
    );
}
