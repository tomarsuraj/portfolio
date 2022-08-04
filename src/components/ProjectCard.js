import React from 'react';
import sty from './ProjectCard.module.css';
import git from '../assets/github.webp';
import liveimg from '../assets/live.webp';

const ProjectCard = ({ title, techStack, desc, img, live, github }) => {
  return (
    <div className={sty.projectCard}>
      <div className={sty.imgContainer}>
        <img src={img} alt="Project title" />
      </div>
      <p className={sty.techStack}>{techStack} </p>

      <div className={sty.body}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className={sty.linkContainer}>
        {live ? (
          <a href={live} target="_blank" rel="noreferrer">
            <img src={liveimg} alt="Live Link" />
          </a>
        ) : null}
        <a href={github} target="_blank" rel="noreferrer">
          <img src={git} alt="Github Link" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
