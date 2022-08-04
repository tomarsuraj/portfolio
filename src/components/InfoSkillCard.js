import React from 'react';

import sty from './InfoSkillCard.module.css';

const SkillMainCard = ({ title, subtitle, img }) => {
  return (
    <div className={sty.skillCard}>
      <div className={sty.imgContainer}>
        <img src={img} alt={title} />
      </div>
      <div className={sty.body}>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default SkillMainCard;
