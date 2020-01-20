import React from 'react';
import {Route} from "react-router-dom";
import ProfileContainer from "./profile/ProfileContainer";
import DialogsContainer from "./dialogs/DialogsContainer";

const Content = () => {
    return (
        <main className={`col-sm-9`}>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/profile" render={() => (<ProfileContainer/>)}/>
        </main>
    );
};

export default Content;