import React from "react";
import style from "./style.module.scss";
import skillsData from "../../../../Constants/Skills";
import { pointer, fb, insta, linkedin, onboarding } from "../../../../assets";

const Header = () => {
  const {
    container,
    main,
    skills,
    onboardingLogo,
    desc,
    connectContainer,
    skillsContainer,
    letstalk,
    soc,
    cn,
  } = style;
  return (
    <section className={container}>
      <article className={main}>
        <div className={desc}>
          <h3>👋 Hello!!! I am</h3>
          <h1>Dwiputra Sam</h1>
          <h2>I am a Software Engineer.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, sunt odio? Voluptate repellat neque dolor accusamus,
            earum sunt consequuntur molestias.
          </p>
          <div className={connectContainer}>
            <div className={letstalk}>
              <div>Let's Talk</div>
              <img src={pointer}></img>
            </div>
            <h6>Follow me on:</h6>
            <div className={soc}>
              <img src={fb}></img>
              <img src={insta}></img>
              <img src={linkedin}></img>
            </div>
          </div>
        </div>
        <img className={onboardingLogo} src={onboarding}></img>
      </article>
      <div className={skillsContainer}>
        {skillsData.map(({ image, number, desc }) => {
          return (
            <section className={skills}>
              <img src={image}></img>
              <div className={cn}>
                <h2>{number}</h2>
                <p>{desc}</p>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Header;
