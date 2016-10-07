import React, { Component } from 'react';
import Header from 'app/components/header';

export default class HomePage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                <h3>Home page!</h3>
            </div>
        );
    }
}
