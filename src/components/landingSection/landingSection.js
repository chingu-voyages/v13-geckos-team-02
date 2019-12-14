import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// IMPORTING RESELECTS
import {
  selectGettingConfigs,
  selectImagePath
} from "../../redux/appConfig/appConfig.selector";
import {
  selectMoviesGenres,
  selectGettingMoviesGenres
} from "../../redux/genre/genre.selector";
import {
  selectGettingNowPlaying,
  selectNowPlayingMovies
} from "../../redux/movies/movies.selector";

// IMPORTING COMPONENTS
import styles from "./landingSection.module.css";
import BigCard from "../bigCard/bigCard";
import SmallCard from "../smallCard/smallCard";
import SellAllButton from "../see-all-button/see-all-button";
import WithSpinner from "../withSpinner/withSpinner";

const LandingSection = ({ nowPlayingMovies, imagePath }) => {
  const { results } = nowPlayingMovies;
  return results ? (
    <div className={styles.landingSection}>
      {/* Background providing blurry image effect */}
      <div
        className={styles.blurry}
        style={{
          background: `url(${imagePath}${results[0].backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      ></div>
      {/* Backgroun providing gradient dark cover on the landing section */}
      {/* Container for the big card */}
      <div className={styles.cardsContainer}>
        <div className={styles.landingCover}></div>
        <div className={styles.bigSection}>
          <BigCard
            imageUrl={`${imagePath}${results[0].backdrop_path}`}
            name={results[0].original_title}
            rating={results[0].vote_average}
            genreIds={results[0].genre_ids}
            id={results[0].id}
          />
        </div>
        {/* Container for the small cards */}
        <div className={styles.smallSection}>
          {results
            .filter((idx, item) => (item > 0) & (item < 4))
            .map(movie => (
              <SmallCard
                key={movie.id}
                name={movie.original_title}
                imageUrl={`${imagePath}${movie.backdrop_path}`}
                position={"relative"}
                id={movie.id}
              />
            ))}
        </div>
      </div>
      <SellAllButton
        position={"absolute"}
        right={"3"}
        count={results.length}
        link="/movies"
      />
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  nowPlayingMovies: selectNowPlayingMovies,
  isFetching:
    selectGettingNowPlaying ||
    selectGettingMoviesGenres ||
    selectGettingConfigs,
  movieGenre: selectMoviesGenres,
  imagePath: selectImagePath
});

export default connect(mapStateToProps)(WithSpinner(LandingSection));
