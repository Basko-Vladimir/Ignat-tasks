import React from "react";
import styles from "./Homework3.module.css"

const Homework3 = ()=> {
    const changeSpan = () => {

    };

    return (
        <div className={styles.block}>
            <span id='number'>1</span>
            <input id='enteredName' type="text"/>
            <button onClick={changeSpan}>Enter</button>
        </div>
    )
};

export default Homework3;
