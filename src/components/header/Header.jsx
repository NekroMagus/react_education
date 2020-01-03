import React from 'react';
import logo from '../../logo.svg';
import './Header.module.css';

const Header = (props) => {
    return (
        <header className="col-sm-12">
            <div className="row">
                <div className="col-sm-2">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="col-sm-10">
                    My super social network
                </div>
            </div>
        </header>
    );
};

export default Header;