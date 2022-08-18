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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            cupiditate facilis qui expedita quae quam ut consequatur cum tempora
            porro accusamus, aliquid magni corporis commodi dolores velit
            necessitatibus? Dolorem nihil, sapiente culpa eveniet dolore odio,
            id quasi neque voluptas esse laudantium deleniti suscipit? Animi
            autem a est odio, distinctio dignissimos. Quod perspiciatis nemo
            sint esse, repellendus reprehenderit quibusdam quaerat beatae!
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
