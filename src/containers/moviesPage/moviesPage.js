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
      <div className={styles.moviesPage_footer}>
        <button>Prev</button>
        <button className={styles.moviesPage_footer_button_active}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default MoviesPage;
