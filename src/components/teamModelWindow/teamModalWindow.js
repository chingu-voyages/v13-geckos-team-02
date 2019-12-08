import React from "react";

import styles from "./teamModalWindow.module.css";
const TeamModalWindow = () => (
  <div className={styles.teamModalWindow}>
    <div className={styles.modal__page}>
      <div className={styles.modal__top}>
        <div
          className={styles.modal__top__image}
          style={{
            backgroundImage: `url(https://www.wikihow.com/images/f/ff/Draw-a-Cute-Cartoon-Person-Step-14.jpg)`
          }}
        />
        <div className={styles.modal__top__details}>
          <h3>john doe</h3>
          <p>June 25, 1986</p>
          <p>Shawn, California, USA</p>
        </div>
      </div>
      <h4>Know for Acting</h4>
      <div className={styles.modal__body}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
);
export default TeamModalWindow;
