import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div class="container-fluid">
            <div className="row">
               <Header/>
               <Navbar/>
               <Profile/>
            </div>
        </div>
    );
}

export default App;
