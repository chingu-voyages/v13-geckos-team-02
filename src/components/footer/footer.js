import React from "react";

import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <div className={styles.footer__top}>
        <h1>AmetBox</h1>
      </div>
      <div className={styles.footer__body}>
        <p>This site does not provide it's own data.</p>
        <p>
          All informations on movies and series are stored and request from
          <a href="https://www.themoviedb.org">TMDB</a>
        </p>
      </div>

      <div className={styles.footer__bottom}>
        2019 -{" "}
        <a
          href="https://github.com/chingu-voyages/v13-geckos-team-02"
          target="_blank"
          rel="noreferrer noopener"
        >
          The Geckos Team 2
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
