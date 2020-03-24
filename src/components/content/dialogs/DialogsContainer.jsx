import React from 'react';
import {connect} from "react-redux";
import {addMessageActionCreator, changeTextActionCreator} from "../../../redux/state";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTextMessage: (text) => {
            dispatch(changeTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs);