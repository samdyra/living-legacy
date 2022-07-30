import React from "react";
import style from "./index.module.scss";

const NavBar = () => {
  const { navcontainer, navelement, kemkerlogocontainer, linkcontainer, cv } =
    style;

  return (
    <div className={navcontainer}>
      <div className={navelement}>
        <div className={kemkerlogocontainer}>
          <a href="/">
            <a>LOGO</a>
          </a>
          <div>
            <a href="/">Dwiputra Sam</a>
          </div>
        </div>
        <div className={linkcontainer}>
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
