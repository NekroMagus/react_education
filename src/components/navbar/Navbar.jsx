import React from "react";
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`col-sm-3 ${css.nav}`}>
            <ul>
                <li><NavLink to="/profile" activeClassName={css.active}> Profile </NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={css.active}> Dialogs </NavLink></li>
                <li><NavLink to="/main" activeClassName={css.active}> Main Content</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;