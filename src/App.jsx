import React from 'react';
import './App.module.css';
import Message from "./components/Message/Message";
import s from './App.module.css';
import UserIcon from "./components/UserIcon/UserIcon";

function App() {
    return (
        <div className={s.App}>
            <UserIcon/>
            <Message/>
        </div>
    );
}

export default App;

