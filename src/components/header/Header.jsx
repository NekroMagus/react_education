import React from 'react';
import logo from '../../logo.svg';
import './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="col-sm-12">
            <div className="row">
                <div className="col-sm-2">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="col-sm-8">
                    My super social network
                </div>
                <div className={`col-sm-2`}>
                    {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>
    );
};

export default Header;