import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute, Link } from 'react-router';
import HomePage from './pages/home-page/';
import DashboardPage from './pages/dashboard-page/';
import NotFoundPage from './pages/not-found-page';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">HomePage</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage} />
            <Route path='dashboard' component={DashboardPage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </Router>),
    document.getElementById('root')
)
