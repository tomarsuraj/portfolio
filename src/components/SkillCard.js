import React from 'react';
import sty from './SkillCard.module.css';

const SkillCard = ({ data }) => {
  return (
    <div className={sty.skillCard}>
      <div className={sty.imgContainer}>
        <img src={data.img} alt={data.title + ' LOGO'} />
      </div>

      <h5>{data.title}</h5>

      {data.rating === 1 ? (
        <div className={sty.rating + ' ' + sty.rating1}></div>
      ) : data.rating === 2 ? (
        <div className={sty.rating + ' ' + sty.rating2}></div>
      ) : data.rating === 3 ? (
        <div className={sty.rating + ' ' + sty.rating3}></div>
      ) : data.rating === 4 ? (
        <div className={sty.rating + ' ' + sty.rating4}></div>
      ) : (
        <div className={sty.rating + ' ' + sty.rating4}></div>
      )}
    </div>
  );
};

export default SkillCard;
