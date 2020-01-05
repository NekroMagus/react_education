import React from 'react';
import css from './Dialogs.module.css';
import DialogName from "./dialogName/DialogName";
import Messages from './messages/Messages';
import {Route} from "react-router-dom";


const Dialogs = (props) => {

    let dialogArray = [
        {id: 1, name:'Sasha'},
        {id: 2, name:'Peter'},
        {id: 3, name:'Anya'},
        {id: 4, name:'Elena'}
    ];

    let dialogElements = [dialogArray
        .map(x =><DialogName id={x.id} name={x.name}/>)];

    let messagesArray = [
        {chat_id:1, message:'Hi'},
        {chat_id:1, message:'Hello'},
        {chat_id:1, message:'How are u?'}
    ];

    let messagesElements = messagesArray
        .map(x =><Route path={`/dialogs/${x.chat_id}`} render={(props)=>(<Messages message={x.message}/>)}/> );

    return (
        <main className="row">
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
        </main>
    );
};

export default Dialogs;