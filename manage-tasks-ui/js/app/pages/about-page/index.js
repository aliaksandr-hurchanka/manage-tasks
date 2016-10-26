import React, { Component } from 'react';
import Article from 'app/components/article';

export default class AboutPage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <h3>About page!</h3>
            <Article />
        );
    }
}
