import React from "react";
import style from "./style.module.scss";
import { skillsData } from "../../../../Constants/Skills";

const Header = () => {
  const {
    container,
    main,
    skills,
    onboardingLogo,
    desc,
    connectContainer,
    skillsContainer,
  } = style;
  return (
    <section className={container}>
      <article className={main}>
        <div className={desc}>
          <h3>Hello</h3>
          <h1>Dwiputra Sam Mulia</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            dolorum?
          </p>
          <div className={connectContainer}>
            <button></button>
            <p>Follow me</p>
            <img></img>
            <img></img>
            <img></img>
          </div>
        </div>
        <img className={onboardingLogo}></img>
      </article>
      <div className={skillsContainer}>
        {skillsData.map(({ image, number, desc }) => {
          return (
            <section className={skills}>
              <image></image>
              <h2>{number}</h2>
              <p>{desc}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Header;
