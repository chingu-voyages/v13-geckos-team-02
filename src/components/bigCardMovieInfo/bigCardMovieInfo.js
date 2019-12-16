import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
// IMPORT SELECTORS
import { selectMoviesGenres } from "../../redux/genre/genre.selector";

import styles from "./bigCardMovieInfo.module.css";

const BigCardMovieInfo = ({
  name = null,
  rating = null,
  restriction = null,
  year = null,
  children,
  history,
  id,
  movieGenres,
  genreIds = null,
  usedBySeries = false
}) => {
  const filteredGenre = genreIds
    ? movieGenres.filter(genre => genreIds.includes(genre.id))
    : [];
  return (
    <div className={styles.bigCardInfo}>
      {children}
      {/* Title section */}
      {usedBySeries ? (
        <h2 className={styles.seriesName}>{name}</h2>
      ) : (
        <h2
          className={styles.movieName}
          onClick={() => history.push(`/movie/${id}`)}
        >
          {name}
        </h2>
      )}
      {!usedBySeries ? (
        <div className={styles.movieInfo}>
          {/* Rating section */}
          {rating ? <span>{rating.toFixed(1)}</span> : null}

          {/* Age Restriction section */}
          {restriction ? (
            <span className={styles.movieRestriction}>{restriction}</span>
          ) : null}
          {/* Genre Section */}
          <ul className={styles.movieGenre}>
            {filteredGenre.length !== 0
              ? filteredGenre
                  .filter((idx, item) => item < 3)
                  .map(genre => <li key={genre.id}>{genre.name}</li>)
              : null}
          </ul>
          {/* Release date section */}
          {year ? <span>&#8226;</span> : null}
          <span>{year}</span>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  movieGenres: selectMoviesGenres
});

export default connect(mapStateToProps)(withRouter(BigCardMovieInfo));
