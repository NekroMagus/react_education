import React from 'react';
import css from './Dialogs.module.css';
import DialogName from "./dialogName/DialogName";
import Messages from './messages/Messages';
import {Route} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <main className="row">
            <div className={`col-md-3 ${css.dialogs}`}>
                <ul>
                    <DialogName id="1" name="Sasha"/>
                    <DialogName id="2" name="Peter"/>
                    <DialogName id="3" name="Anya"/>
                    <DialogName id="4" name="Elena"/>
                </ul>
            </div>
            <div className={`col-md-9 ${css.messages}`}>
                <ul>
                    <Route path="/dialogs/1" render={(props)=>(<Messages message="Hi"/>)}/>
                    <Route path="/dialogs/1" render={(props)=>(<Messages message="Hello"/>)}/>
                    <Route path="/dialogs/1" render={(props)=>(<Messages message="How are u?"/>)}/>
                </ul>
            </div>
        </main>
    );
};

export default Dialogs;