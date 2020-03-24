import React from 'react';
import {Route} from "react-router-dom";
import ProfileContainer from "./profile/ProfileContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";
import Login from "../login/Login";

const Content = () => {
    return (
        <main className={`col-sm-9`}>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </main>
    );
};

export default Content;