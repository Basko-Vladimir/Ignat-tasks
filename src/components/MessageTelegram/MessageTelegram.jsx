import React from "react";
import styles from "./MessageTelegram.module.css";

const MessageTelegram = (props) => {
    return (
        <div className={styles.messageBlock}>
            <h3 className={styles.senderName}>Басько Владимир</h3>
            <p className={styles.message}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p className={styles.time}>{props.time}</p>
        </div>
    )
};

export default MessageTelegram;