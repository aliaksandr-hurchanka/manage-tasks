import React from 'react';

const LeftMenu = () => {
    return (
        <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                    <li className="sidebar-search">
                        <div className="input-group custom-search-form">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftMenu;
