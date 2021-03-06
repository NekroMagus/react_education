import React from "react";
import css from './FormsControll.module.css';

const Element = (Element) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={`${css.formControl} ${hasError ? css.error : ""}`}>
            <Element {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export default Element;