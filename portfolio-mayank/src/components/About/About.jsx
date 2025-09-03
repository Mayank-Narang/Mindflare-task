import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{ color:"white" }}>FullStack Developer</h3>
              <p style={{ color:"white" }}>
                I'm a fullstack developer with experience in building responsive
                and optimized web applications. I have strong skills in PERN/MERN, focusing on creating interactive and user-friendly
                interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{ color:"white" }}>LeetCoder</h3>
              <p style={{ color:"white" }}>
                I have about 1000 problems on LeetCode, ranking in the top 5.4% globally.
                I am passionate about solving algorithmic challenges and improving my
                problem-solving skills. I regularly participate in contests and aim to
                further enhance my data structures and algorithms knowledge.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
