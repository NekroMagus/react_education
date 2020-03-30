import React from 'react';
import css from './Dialogs.module.css';
import DialogName from "./dialogName/DialogName";
import Messages from './messages/Messages';
import {Route} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import Element from "../../common/fomsControll/FormsControl";
import {maxLengthCreator, requiredField} from "../../../utils/validator/validator";

const maxLength20 = maxLengthCreator(20);

const Dialogs = (props) => {

    let dialogElements = props.dialogs
        .map(x => <DialogName id={x.id} name={x.name}/>);

    let messagesElements = props.messages
        .map(x => <Route path={`/dialogs/${x.chat_id}`} render={() => (<Messages message={x.message}/>)}/>);

    const addNewMessageDialogs = (value) => {
        props.addMessage(value.newMessageBody);
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
                <AddMessageFormRedux onSubmit={addNewMessageDialogs}/>
            </div>
        </section>
    );
};

const Textarea = Element('textarea');

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={"newMessageBody"}
                   placeholder={"Enter you message"}
                   validate={[requiredField, maxLength20]}/>
            <button>Отправить</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;