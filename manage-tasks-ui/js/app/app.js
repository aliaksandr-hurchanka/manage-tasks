import React from 'react';
import MainMenu from 'app/components/main-menu';

export const App = (props) => (
    <div className="container-fluid">
        <MainMenu />
        <div className="row">
            <div className="col-md-2">
                {'#Left menu'}
            </div>
            <div className="col-md-10">
                {props.children}
            </div>
        </div>
    </div>
);
