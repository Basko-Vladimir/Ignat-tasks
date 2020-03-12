import React from "react";
import styles from "./MessageTelegram.module.css";

const MessageTelegram = (props) => {
    return (
        <div className={styles.messageWrap}>
            <img className={styles.avatar}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE8ONSyYrM-yJMooletyTZ-eHJF37_HHkP8SPxNHrGJ04X028k"
                 alt="ava"/>
            <div className={styles.messageBlock}>
                <h3 className={styles.senderName}>Басько Владимир</h3>
                <p className={styles.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deleniti est ipsa molestias nam odit placeat praesentium quod recusandae tempora.
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                <p className={styles.time}>{props.time}</p>
            </div>
        </div>
    )
};

export default MessageTelegram;