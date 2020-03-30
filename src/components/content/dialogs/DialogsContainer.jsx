import React from 'react';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {addMessage} from "../../../redux/reducers/dialogsReducer";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }

};

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)
(Dialogs);