import React from 'react';
import { Link } from 'react-router';
import {Grid} from 'react-bootstrap';

export const App = (props) => (
    <div>
        <Grid>
            <ul>
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {props.children}
        </Grid>
    </div>
);
