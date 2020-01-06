import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let user = {name: "Igor", surname:"Fliginskikh"};

let dialogs = [
    {id: 1, name:'Sasha'},
    {id: 2, name:'Peter'},
    {id: 3, name:'Anya'},
    {id: 4, name:'Elena'}
];

let messages = [
    {chat_id:1, message:'Hi'},
    {chat_id:1, message:'Hello'},
    {chat_id:1, message:'How are u?'}
];

ReactDOM.render(<App user={user} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
