import React from "react";
import MyName from "./MyName/MyName";
import MessageTelegram from "./MessageTelegram/MessageTelegram";
import TodoList from "./TodoList/TodoList";

const Monday = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    hours = (hours < 10) ? `0${hours}` : hours;
    min = (min < 10) ? `0${min}` : min;
    let time = `${hours}:${min}`;
    return (
        <>
            <MyName/>
            <MessageTelegram time={time}/>
            <TodoList/>
        </>
    )
};

export default Monday;