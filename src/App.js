import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <div className="row">
                    <Header/>
                    <Navbar/>
                    <div className={`col-sm-9`}>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" render={(props) =>(<Profile name="Igor" surname="Fliginskikh"/>)}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
