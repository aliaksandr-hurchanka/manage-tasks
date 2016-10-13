import React from 'react';
import MainMenu from 'app/components/main-menu';
import LeftMenu from 'app/components/left-menu';

export const App = (props) => (
    <div className="container-fluid">
        <MainMenu />
        <div className="row">
            <div className="col-md-2">
                <LeftMenu />
            </div>
            <div className="col-md-10">
                {props.children}
            </div>
        </div>
    </div>
);
