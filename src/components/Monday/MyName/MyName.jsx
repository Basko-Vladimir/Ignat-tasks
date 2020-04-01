import React from "react";
import styles from "./MyName.module.css";

const MyName = () => {
    let myQualities = ['Рационалист', 'Студент', 'Анимешник', 'Коммунист'];
    return (
        <div className={styles.myNameBlock}>
            <h1>Басько Владимир Георгиевич</h1>
            <h2>Мои качества</h2>
            <ul>
                {myQualities.map((quality, i) => <li className={(i === 1) ? styles.specialQuality : styles.quality} key={i}>{quality}</li>)}
            </ul>
        </div>
    )
};

export default MyName;