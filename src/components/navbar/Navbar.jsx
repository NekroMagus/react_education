import React from "react";
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`col-md-3 ${css.nav}`}>
            <ul>
                <li><a href="#"> Profile </a></li>
                <li><a href="#"> Messages </a></li>
                <li><a href="#"> Main Content</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;