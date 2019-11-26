import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./bigCardMovieInfo.module.css";

const BigCardMovieInfo = ({
  name = null,
  rating = null,
  restriction = null,
  genre = null,
  year = null,
  children,
  history,
  id
}) => (
  <div className={styles.bigCardInfo}>
    {children}
    <h2
      className={styles.movieName}
      onClick={() => history.push(`/movie/${id}`)}
    >
      {name}
    </h2>
    <div className={styles.movieInfo}>
      <span>{rating}</span>
      <span className={styles.movieRestriction}>{restriction}</span>
      <span>{genre}</span>
      {year ? <span>&#8226;</span> : null}
      <span>{year}</span>
    </div>
  </div>
);

export default withRouter(BigCardMovieInfo);
