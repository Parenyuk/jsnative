import React from 'react';
import './App.module.css';
import Message from "./components/Message/Message";
import s from './App.module.css';
import UserIcon from "./components/UserIcon/UserIcon";
import HumanQualities from "./components/HumanQuailities/HumanQualities";

function App() {
    return (
        <div className={s.App}>
            <div>
                <UserIcon/>
                <Message/>
            </div>
            <div>
                <HumanQualities/>
            </div>

        </div>
    );
}

export default App;

