import React from "react";
import style from "./index.module.scss";

const NavBar = () => {
  const { navcontainer, navelement, kemkerlogocontainer, linkcontainer } =
    style;

  return (
    <div className={navcontainer}>
      <div className={navelement}>
        <div className={kemkerlogocontainer}>
          <a href="/">
            <a>LOGO</a>
          </a>
          <div>
            <a href="/">Kemah Kerja Teknik Geodesi dan Geomatika ITB 1000</a>
          </div>
        </div>
        <div className={linkcontainer}>
          <a href="/KaryaScreen">Base Map</a>
          <a href="/">Terrain Profiles</a>
          <a href="/">Flood Model</a>
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
