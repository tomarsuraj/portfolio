import React from 'react';
import { projects } from '../assets/json/projects';
import ProjectCard from '../components/ProjectCard';
import sty from './Projects.module.css';
const Projects = () => {
  return (
    <section className={'sectionContainer ' + sty.projects}>
      <h2>
        My <span>work and Projects</span> Section
      </h2>
      <div className={sty.cardContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            techStack={project.techStack}
            desc={project.desc}
            img={project.img}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
