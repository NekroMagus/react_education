import React from "react";
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`col-sm-3 ${css.nav}`}>
            <ul>
                <li><a href="/profile"> Profile </a></li>
                <li><a href="/dialogs"> Dialogs </a></li>
                <li><a href="#"> Main Content</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;