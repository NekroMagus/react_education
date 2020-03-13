import React from "react";
import css from "./Preloader.module.css";
import preloader from "../../../assets/img/loader.svg";

const Preloader = () => {
    return (
        <img className={css.preloader} src={preloader} alt="preloader"/>
    );
};

export default Preloader;