import React from 'react';
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import {Route} from "react-router-dom";
import ProfileContainer from "./profile/ProfileContainer";

const Content = (props) => {
    return (
        <main className={`col-sm-9`}>
            <Route path="/dialogs" render={() => <Dialogs/>}/>
            <Route path="/profile" render={() => (<ProfileContainer/>)}/>
        </main>
    );
};

export default Content;