import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";

const App = (props) => {
    return (
            <div className="container-fluid">
                <div className="row">
                    <Header/>
                    <Navbar/>
                    <Content dialogs={props.state.dialogs}
                             messages={props.state.messages}
                             user={props.state.user}/>
                </div>
            </div>
    );
};

export default App;
