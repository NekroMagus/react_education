import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
               <Header/>
               <Navbar/>
               <Profile/>
            </div>
        </div>
    );
};

export default App;
