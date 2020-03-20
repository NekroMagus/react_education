import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import HeaderContainer from "./components/header/HeaderContainer";

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <HeaderContainer/>
                <Navbar/>
                <Content/>
            </div>
        </div>
    );
};

export default App;
