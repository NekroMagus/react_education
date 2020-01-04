import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <main className="row">
            <div className={`col-md-3 ${css.dialogs}`}>
                <ul>
                    <li>Sasha</li>
                    <li>Vasya</li>
                    <li>Sveta</li>
                    <li>Katya</li>
                </ul>
            </div>
            <div className={`col-md-9 ${css.messages}`}>
                <ul>
                    <li>Hi</li>
                    <li>Hello</li>
                    <li>How are u?</li>
                </ul>
            </div>
        </main>
    );
};

export default Dialogs;