import React from 'react';
import css from './Dialogs.module.css';
import DialogName from "./dialogName/DialogName";
import Messages from './messages/Messages';
import {Route} from "react-router-dom";
import {addMessageActionCreator, changeTextActionCreator} from "../../../redux/state";

const Dialogs = (props) => {

    let dialogElements = props.dialogs
        .map(x => <DialogName id={x.id} name={x.name}/>);

    let messagesElements = props.messages
        .map(x => <Route path={`/dialogs/${x.chat_id}`} render={() => (<Messages message={x.message}/>)}/>);

    const addMessage = () => {
        props.sendMessage();
    };

    const changeText = (e) => {
        let text = e.target.value;
        props.changeTextMessage(text);
    };

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
                <textarea onChange={changeText} value={props.newMessageText}/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </section>
    );
};

export default Dialogs;