import React from 'react';
import css from './Dialogs.module.css';
import DialogName from "./dialogName/DialogName";
import Messages from './messages/Messages';
import {Route} from "react-router-dom";
import {addMessageActionCreator, changeTextActionCreator} from "../../../redux/state";

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs
        .map(x => <DialogName id={x.id} name={x.name}/>);

    let messagesElements = props.dialogsPage.messages
        .map(x => <Route path={`/dialogs/${x.chat_id}`} render={(props) => (<Messages message={x.message}/>)}/>);

    let newChangeElement = React.createRef();

    let changeText = () => {
        let text = newChangeElement.current.value;
        props.dispatch(changeTextActionCreator(text));
    };

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
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
                <textarea ref={newChangeElement} onChange={changeText} value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </section>
    );
};

export default Dialogs;