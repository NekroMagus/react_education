import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/content/profile/Profile";
import Dialogs from "./components/content/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Content from "./components/content/Content";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <div className="row">
                    <Header/>
                    <Navbar/>
                    <Content dialogs={props.state.dialogs}
                             messages={props.state.messages}
                             user={props.state.user}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
