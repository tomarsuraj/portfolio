import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';
import sty from './Skills.module.css';
import { programming, database, webDev } from '../assets/json/skills';
const Skills = () => {
  const [data, setData] = useState(programming);
  return (
    <section className={'sectionContainer ' + sty.skills}>
      <h2>MY Skills</h2>

      <div className={sty.selectorContainer}>
        <button
          onClick={() => setData(programming)}
          className={
            sty.button + ' ' + (data === programming ? sty.selected : null)
          }
        >
          Programming
        </button>
        <button
          onClick={() => setData(webDev)}
          className={sty.button + ' ' + (data === webDev ? sty.selected : null)}
        >
          Web Development
        </button>
        <button
          onClick={() => setData(database)}
          className={
            sty.button + ' ' + (data === database ? sty.selected : null)
          }
        >
          Database
        </button>
      </div>
      <div className={sty.skillConatiner}>
        {data.map((data, index) => (
          <SkillCard data={data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
