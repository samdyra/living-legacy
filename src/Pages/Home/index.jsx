import React from "react";
import style from "./style.module.scss";
import NavBar from "../../Components/Navbar";
import { Header, Description, MainProjects, SideProjects } from "./Components";

const HomeScreen = () => {
  const { container } = style;
  return (
    <div className={container}>
      <NavBar></NavBar>
      <Header></Header>
      <Description></Description>
      <MainProjects></MainProjects>
      <SideProjects></SideProjects>
    </div>
  );
};

export default HomeScreen;
