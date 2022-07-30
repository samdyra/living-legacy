import React from "react";
import style from "./style.module.scss";
import NavBar from "../../Components/Navbar";
import { Header, Description, MainProjects } from "./Components";

const HomeScreen = () => {
  const { container } = style;
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Description></Description>
      <MainProjects></MainProjects>
    </>
  );
};

export default HomeScreen;
