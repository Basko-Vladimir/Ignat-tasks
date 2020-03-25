import React from "react";
import styles from "../Homework-3-4.module.css";

const ShowNames = (props) => {
    return (
        <div className={styles.showNames}>
            {props.names.map( (n, i) => <span key={i}>{n} </span>)}
        </div>
    )
};

export default ShowNames;