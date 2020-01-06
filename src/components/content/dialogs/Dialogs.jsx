import React from 'react';
import css from './Dialogs.module.css';
import DialogName from "./dialogName/DialogName";
import Messages from './messages/Messages';
import {Route} from "react-router-dom";


const Dialogs = (props) => {

    let dialogElements = props.dialogs
        .map(x =><DialogName id={x.id} name={x.name}/>);

    let messagesElements = props.messages
        .map(x =><Route path={`/dialogs/${x.chat_id}`} render={(props)=>(<Messages message={x.message}/>)}/> );

    return (
        <section className="row">
            <div className={`col-md-3 ${css.dialogs}`}>
                <ul>
                    {dialogElements}
                </ul>
            </div>
            <div className={`col-md-9 ${css.messages}`}>
                <ul>
                    {messagesElements}
                </ul>
            </div>
        </section>
    );
};

export default Dialogs;