import React, { Component } from 'react';
import Header from 'app/components/header';
import Article from 'app/components/article';

export default class HomePage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                <h3>Home page!</h3>
                <Article />
            </div>
        );
    }
}
