import React, { Component } from 'react';
import { Route, Router, hashHistory } from 'react-router';
import HomePage from './pages/home-page';


export default class App extends Component {
  	render() {
    		return (
            <Router history={ hashHistory }>
                <Route path='/' component={HomePage} />
            </Router>
        );
    }
}
