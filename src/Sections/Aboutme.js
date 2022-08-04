import React from 'react';
import aboutMepng from '../assets/aboutMe.webp';
import sty from './Aboutme.module.css';
const Aboutme = () => {
  return (
    <div className={'sectionContainer ' + sty.aboutme}>
      <div className={sty.left}>
        <img src={aboutMepng} alt="About me Logo" />
      </div>
      <div className={sty.right}>
        <h1>About Me</h1>

        <table className={sty.dataTable}>
          <tbody>
            <tr className={sty.dataRow}>
              <td className={sty.dataTitle}>Name</td>
              <td className={sty.data}>Suraj Tomar</td>
            </tr>
            <tr className={sty.dataRow}>
              <td className={sty.dataTitle}>Date of Birth</td>
              <td className={sty.data}>11-12-2001</td>
            </tr>
            <tr className={sty.dataRow}>
              <td className={sty.dataTitle}>Email</td>
              <td className={sty.data}>
                <a href="mailto: surajtomar1112@gmail.com">
                  surajtomar1112@gmail.com
                </a>
              </td>
            </tr>
            <tr className={sty.dataRow}>
              <td className={sty.dataTitle}>Github Username</td>
              <td className={sty.data}>
                <a
                  href="https://github.com/tomarsuraj"
                  target="_blank"
                  rel="noreferrer"
                >
                  tomarsuraj
                </a>
              </td>
            </tr>
            <tr className={sty.dataRow}>
              <td className={sty.dataTitle}>Linked In Username</td>
              <td className={sty.data}>
                <a
                  href="https://www.linkedin.com/in/tomarsuraj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  tomarsuraj
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aboutme;
