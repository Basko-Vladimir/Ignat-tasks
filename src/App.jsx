import React from 'react';
import './App.css';
import MyName from "./components/MyName/MyName";
import MessageTelegram from "./components/MessageTelegram/MessageTelegram";
import Homework3 from "./components/Homework-3/Homework3";


function App() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    hours = (hours < 10) ? `0${hours}` : hours;
    min = (min < 10) ? `0${min}` : min;
    let time = `${hours}:${min}`;
    return (
        <div className="App">
            <MyName/>
            <MessageTelegram time={time}/>
            <Homework3/>
        </div>
    );
}

export default App;
