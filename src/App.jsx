import React from 'react';
import './App.css';
import MyName from "./components/MyName/MyName";
import MessageTelegram from "./components/MessageTelegram/MessageTelegram";
import Homework34 from "./components/Homework-3-4/Homework-3-4";


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
            <Homework34/>
        </div>
    );
}

export default App;
