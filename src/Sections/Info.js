import React from 'react';
import SkillMainCard from '../components/InfoSkillCard';
import sty from './Info.module.css';
import { skillMain } from '../assets/json/skillMaindata';
const Info = () => {
  return (
    <section className={'sectionContainer ' + sty.info}>
      <div className={sty.heading}>
        <h3>
          I can Sip <span>Coffee</span>, Write <span>Code</span>, Design Layouts
        </h3>
        <h3>
          And Generates <span>Profits</span>
        </h3>
      </div>
      <div className={sty.skills}>
        {skillMain.map((skill, index) => (
          <SkillMainCard
            key={index}
            img={skill.img}
            title={skill.title}
            subtitle={skill.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Info;
