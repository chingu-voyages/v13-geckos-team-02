import React from "react";

import styles from "./moviesPage.module.css";

import PortraitCard from "../../components/portraitCard/portraitCard";

const MoviesPage = () => {
  const range = [1, 2, 3, 4, 5, 5, 6, 61, 2, 2, 3, 3, 3];
  return (
    <div className={styles.moviesPage_container}>
      <h1>Latest movies</h1>
      <div className={styles.moviesPage_genrebar}></div>
      <div className={styles.moviesPage_body}>
        {range.map(() => (
          <PortraitCard />
        ))}
      </div>
      <div className={styles.moviesPage_footer}></div>
    </div>
  );
};

export default MoviesPage;
