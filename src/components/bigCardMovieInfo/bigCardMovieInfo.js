import React from "react";

import styles from "./bigCardMovieInfo.module.css";

const BigCardMovieInfo = ({
  name = null,
  rating = null,
  restriction = null,
  genre = null,
  year = null,
  children
}) => (
  <div className={styles.bigCardInfo}>
    {children}
    <h2 className={styles.movieName}>{name}</h2>
    <div className={styles.movieInfo}>
      <span>{rating}</span>
      <span className={styles.movieRestriction}>{restriction}</span>
      <span>{genre}</span>
      {year ? <span>&#8226;</span> : null}
      <span>{year}</span>
    </div>
  </div>
);

export default BigCardMovieInfo;
