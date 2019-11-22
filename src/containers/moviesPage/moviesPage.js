import React from "react";

import styles from "./moviesPage.module.css";

import PortraitCard from "../../components/portraitCard/portraitCard";

const MoviesPage = () => {
  return (
    <div className={styles.moviesPage_container}>
      <h1>Latest movies</h1>
      <div className={styles.moviesPage_genrebar}></div>
      <div className={styles.moviesPage_body}>
        <PortraitCard />
      </div>
      <div className={styles.moviesPage_footer}></div>
    </div>
  );
};

export default MoviesPage;
