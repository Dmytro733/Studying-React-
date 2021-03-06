import logo from '../../assets/images/cloud.png';
import style from "./Header.module.css"
import React from "react";

const Logo = () => {
  return(
    <div className={style.logo_header}>
      <img src={logo} className={style.App_logo} alt="logo" />
      <div className={style.logo_text}>
        <span>cloud</span>
        <span> social</span>
      </div>
    </div>
  );
}

export default Logo;
