import React from "react";
import style from "./index.module.scss";
import { logo } from "../../assets";
const NavBar = () => {
  const { navcontainer, navelement, kemkerlogocontainer, linkcontainer, cv } =
    style;

  return (
    <div className={navcontainer}>
      <div className={navelement}>
        <div className={kemkerlogocontainer}>
          <img src={logo}></img>
        </div>
        <div className={linkcontainer}>
          <a href="/">Portfolio</a>
          <a href="/">Blog</a>
          <a className={cv} href="/">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
