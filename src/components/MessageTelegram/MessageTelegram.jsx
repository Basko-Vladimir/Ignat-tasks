import React from "react";
import styles from "./MessageTelegram.module.css";

const MessageTelegram = (props) => {
    return (
        <div className={styles.messageBlock}>
            <h3 className={styles.senderName}>Басько Владимир</h3>
            <p className={styles.message}>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Amet ducimus esse harum magni nesciunt officiis
                perspiciatis voluptatem. Ex, quod rem.
            </p>
            <p className={styles.time}>{props.time}</p>
        </div>
    )
};

export default MessageTelegram;