import React from 'react';
import {Link} from 'react-router';

const MainMenu = () => {
    return (
        <div className="row">
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;
