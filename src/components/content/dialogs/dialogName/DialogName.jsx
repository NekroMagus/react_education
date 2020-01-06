import React from 'react';
import {NavLink} from "react-router-dom";
import css from './DialogName.module.css';

const DialogName = (props) => {
    let link = "/dialogs/" + props.id;
    return (
        <li><NavLink to={link} activeClassName={css.active}>{props.name}</NavLink></li>
    );
};

export default DialogName;