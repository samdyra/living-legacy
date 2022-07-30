import React from "react";
import style from "./style.module.scss";
import NavBar from "../../Components/Navbar";
import { Header, Description } from "./Components";

const HomeScreen = () => {
  const { container } = style;
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Description></Description>
    </>
  );
};

export default HomeScreen;
