import React from "react";
import s from "./Preloader.module.css";
import preloader from "../../../images/preloader.gif";


const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="Preloader"/>
        </div>
    )
};

export default Preloader;