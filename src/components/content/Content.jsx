import React from 'react';
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import {Route} from "react-router-dom";

const Content = (props) => {
    return (
        <main className={`col-sm-9`}>
            <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
            <Route path="/profile" render={() => (<Profile user={props.state.user}/>)}/>
        </main>
    );
};

export default Content;