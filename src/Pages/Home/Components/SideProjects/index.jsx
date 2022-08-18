import React from "react";
import style from "./style.module.scss";
import { SideProjectsData } from "../../../../Constants";

const SideProjects = () => {
  const { container } = style;
  return (
    <article className={container}>
      <h1></h1>
      <p></p>
      <section>
        {SideProjectsData.map(({ image }) => {
          return <p>{image}</p>;
        })}
      </section>
    </article>
  );
};

export default SideProjects;
