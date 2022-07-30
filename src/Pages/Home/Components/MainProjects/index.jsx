import React from "react";
import style from "./style.module.scss";
import { MainProjectsData } from "../../../../Constants";
const MainProjects = () => {
  const {
    container,
    projectContainer,
    projectDataContainer,
    projectsDesc,
    titleStyle,
  } = style;
  return (
    <section className={container}>
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio
        nesciunt quis dolores corporis tenetur.
      </p>
      <div className={projectContainer}>
        {MainProjectsData.map(({ shortDesc, title, image }) => {
          return (
            <div className={projectDataContainer}>
              <section className={projectsDesc}>
                <div className={titleStyle}>
                  <p>{shortDesc}</p>
                  <h1>{title}</h1>
                </div>
                <h3>Explore Now</h3>
              </section>
              <img></img>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainProjects;
