import React from "react";
import style from "./style.module.scss";
import skillsData from "../../../../Constants/Skills";

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
          <h3>👋 Hello!!! I am</h3>
          <h1>Dwiputra Sam</h1>
          <p>I am a Software Engineer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, sunt odio? Voluptate repellat neque dolor accusamus,
            earum sunt consequuntur molestias.
          </p>
          <div className={connectContainer}>
            <button></button>
            <p>Follow me:</p>
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
