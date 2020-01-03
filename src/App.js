import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
               <Header/>
               <Navbar/>
               {/*<Profile/>*/}
               <Dialogs/>
            </div>
        </div>
    );
};

export default App;
