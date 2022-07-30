import React from "react";
import style from "./style.module.scss";
import NavBar from "../../Components/Navbar";
import { Header } from "./Components";

const HomeScreen = () => {
  const { container } = style;
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
    </>
  );
};

export default HomeScreen;
