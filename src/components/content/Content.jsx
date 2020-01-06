import React from 'react';
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import {Route} from "react-router-dom";

const Content = (props) => {
    return (
        <main className={`col-sm-9`}>
            <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
            <Route path="/profile" render={() => (<Profile name={props.user.name} surname={props.user.surname}/>)}/>
        </main>
    );
};

export default Content;