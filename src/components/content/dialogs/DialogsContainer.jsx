import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeTextActionCreator} from "../../../redux/state";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTextMessage: (text) =>{
            dispatch(changeTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;