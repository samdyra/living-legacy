import React from "react";
import style from "./style.module.scss";

const Footer = () => {
  const { container, textContainer, text, links, contact, contactMe, line } =
    style;
  return (
    <footer className={container}>
      <img></img>
      <div className={textContainer}>
        <div className={text}>
          <img></img>
          <div className={links}>
            <a>About</a>
            <a>Portfolio</a>
            <a>Contact Us</a>
          </div>
          <div className={contact}>
            <img></img>
            <div className={contactMe}>
              <h4>CONTACT ME:</h4>
              <p>dwiputrasam@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <img className={line}></img>
      <p>Copyright © 2022 Leslie Alexander. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
