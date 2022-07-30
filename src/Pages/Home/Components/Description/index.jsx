import React from "react";
import style from "./style.module.scss";
import { SkillsDesc } from "../../../../Constants";

const Description = () => {
  const { container, about, skillDesc, aboutText, skillDescContainer } = style;
  return (
    <section className={container}>
      <article className={about}>
        <img></img>
        <div className={aboutText}>
          <h3>About Me</h3>
          <h1>Who Am I</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut modi
            nisi quibusdam tempore quod perferendis! Animi, odio? Illo, esse
            dolores?
          </p>
          <button>Download CV</button>
        </div>
      </article>
      <section className={skillDescContainer}>
        {SkillsDesc.map(({ image, desc, descTitle }) => {
          return (
            <div className={skillDesc}>
              <img></img>
              <h1>{descTitle}</h1>
              <p>{desc}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Description;
