import React, { useEffect, useState } from 'react';
import sty from './Main.module.css';
import mainAvatar from '../assets/mainAvatar.webp';
import js from '../assets/skills/js.webp';
import html from '../assets/skills/html.webp';
import react from '../assets/skills/react.webp';
import firebase from '../assets/skills/firebaseRealtime.webp';
import node from '../assets/skills/node.svg';
import python from '../assets/skills/python.webp';

const Main = () => {
  const [isImgload, setIsImgload] = useState(false);

  useEffect(() => {
    setIsImgload(true);
  }, []);

  return (
    <section className={'sectionContainer ' + sty.main}>
      <div className={sty.forground}>
        <div className={sty.dataContainer}>
          <div className={sty.intro}>
            <p>Hello I am</p>
            <h1>Suraj Tomar</h1>
          </div>
          <div className={sty.skill}>
            <p>Aspiring Web Developer</p>
            <p>Cross Platform React Native Developer</p>
          </div>
        </div>
        <div className={sty.mainAvatar}>
          <img src={mainAvatar} alt="mainAvatar" />
        </div>
      </div>
      <div className={sty.background}>
        <img
          src={react}
          className={isImgload ? sty.img1 : sty.img0L}
          alt="React JS logo"
        />
        <img
          src={js}
          className={isImgload ? sty.img2 : sty.img0L}
          alt="JavaScript logo"
        />
        <img
          src={firebase}
          className={isImgload ? sty.img3 : sty.img0L}
          alt="Firebase logo"
        />
        <img
          src={python}
          className={isImgload ? sty.img4 : sty.img0R}
          alt="Python logo"
        />
        <img
          src={node}
          className={isImgload ? sty.img5 : sty.img0R}
          alt="Node JS logo"
        />
        <img
          src={html}
          className={isImgload ? sty.img6 : sty.img0R}
          alt="HTML logo"
        />
      </div>
    </section>
  );
};

export default Main;
