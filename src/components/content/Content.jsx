import React from 'react';
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import {Route} from "react-router-dom";

const Content = (props) => {
    return (
        <main className={`col-sm-9`}>
            <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                          dispatch={props.dispatch}/>}/>
            <Route path="/profile" render={() => (<Profile profilePage={props.state.profilePage}
                                                           dispatch={props.dispatch}/>)}/>
        </main>
    );
};

export default Content;