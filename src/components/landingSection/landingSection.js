import React from "react";
import { connect } from "react-redux";
// IMPORTING REDUX

// IMPORTING COMPONENTS
import styles from "./landingSection.module.css";
import BigCard from "../bigCard/bigCard";
import SmallCard from "../smallCard/smallCard";
import SellAllButton from "../see-all-button/see-all-button";
import WithSpinner from "../withSpinner/withSpinner";

const LandingSection = ({ imageUrl, nowPlayingMovies, imageConfig }) => {
  const { results, page, total_results, total_pages } = nowPlayingMovies;
  const { secure_base_url, backdrop_sizes } = imageConfig;
  const imagePath = `${secure_base_url}${backdrop_sizes[3]}`;
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
      <div className={styles.landingCover}></div>
      {/* Container for the big card */}
      <div className={styles.cardsContainer}>
        <div className={styles.bigSection}>
          <BigCard
            imageUrl={`${imagePath}${results[0].backdrop_path}`}
            name={results[0].original_title}
            rating={results[0].vote_average}
            restriction="16+"
            genre={["action", "sci-fi"]}
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
              />
            ))}
        </div>
        <SellAllButton
          position={"absolute"}
          right={"3"}
          count={results.length}
        />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = ({ movies, genres, configs }) => ({
  // GET NOW PLAYING MOVIES INFORMATION
  nowPlayingMovies: movies.nowPlayingMovies,
  // IS fetching is either is true
  isFetching:
    movies.gettingNowPlaying ||
    genres.gettingMoviesGenres ||
    configs.gettingConfigs,
  movieGenre: genres.moviesGenres,
  imageConfig: configs.imageConfig
});

export default connect(mapStateToProps)(WithSpinner(LandingSection));
