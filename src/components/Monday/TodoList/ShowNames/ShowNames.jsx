import React from "react";
import styles from "../TodoList.module.css";

const ShowNames = (props) => {
    return (
        <div className={styles.showNames}>
            {props.names.map( (n, i) => <span key={i}>{n} </span>)}
        </div>
    )
};

export default ShowNames;