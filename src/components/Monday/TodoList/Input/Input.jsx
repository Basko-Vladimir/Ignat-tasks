import React from "react";
import s from "./Input.module.css";

const Input = (props) => {
    return (
        <input type="text"
               onChange={(e) => props.changeInputValue(e)}
               onKeyPress={(e) => props.keyPressEnter(e)}
               value={props.inputValue}
               className={props.isEmptyValue && s.error}/>
    )
};

export default Input;