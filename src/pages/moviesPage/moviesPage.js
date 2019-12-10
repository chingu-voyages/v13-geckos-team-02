import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// IMPORTING RESELECTS
import { selectGettingConfigs } from "../../redux/appConfig/appConfig.selector";
import {
  selectMoviesGenres,
  selectGettingMoviesGenres
} from "../../redux/genre/genre.selector";
import {
  selectMovies,
  selectGettingNowPlaying,
  selectGettingTrendingMovies,
  selectGettingPopularMovies,
  selectGettingTopRatedMovies,
  selectGettingUpcomingMovies
} from "../../redux/movies/movies.selector";
// IMPORTING STYLES
import styles from "./moviesPage.module.css";
// IMPORTING COMPONENTS
import PortraitCard from "../../components/portraitCard/portraitCard";
import ToggleButton from "../../components/toggleButton/toggleButton";
import withSpinner from "../../components/withSpinner/withSpinner";

const MoviesPage = ({ movies, match: { params } }) => {
  let page = 1;
  const [moviesType, setMoviesType] = useState("nowPlayingMovies");
  const [moviesTypeTitle, setMoviesTypeTitle] = useState("Now Playing Movies");
  useEffect(() => {
    switch (params.type_path) {
      case "now_playing":
        setMoviesType("nowPlayingMovies");
        setMoviesTypeTitle("Now Playing Movies");
        break;
      case "trending":
        setMoviesType("trendingMovies");
        setMoviesTypeTitle("Trending Movies");
        break;
      case "popular":
        setMoviesType("popularMovies");
        setMoviesTypeTitle("Popular Movies");
        break;
      case "top_rated":
        setMoviesType("topRatedMovies");
        setMoviesTypeTitle("Top Rated Movies");
        break;
      case "upcoming":
        setMoviesType("upcomingMovies");
        setMoviesTypeTitle("Upcoming Movies");
        break;
      default:
        return;
    }
  }, [params.type_path]);
  const range = [1, 2, 3, 4, 5, 5, 6, 61, 2, 2, 3, 3, 3];
  const newMovies = movies[moviesType] ? movies[moviesType] : [];
  return (
    <div className={styles.moviesPage_container}>
      <h1>{moviesTypeTitle}</h1>
      <div className={styles.moviesPage_genrebar}>
        <ToggleButton name={"Action"} active />
        <ToggleButton name={"comedy"} />
        <ToggleButton name={"documentry"} active />
        <ToggleButton name={"thriller"} />
        <ToggleButton name={"drama"} />
      </div>
      <div className={styles.moviesPage_body}>
        {newMovies.length !== 0
          ? newMovies.results.map(movie => (
              <PortraitCard key={movie.id} movie={movie} toPage={"movie"} />
            ))
          : null}
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
const mapStateToProps = createStructuredSelector({
  movies: selectMovies,
  isFetching:
    selectGettingNowPlaying ||
    selectGettingMoviesGenres ||
    selectGettingTopRatedMovies ||
    selectGettingPopularMovies ||
    selectGettingUpcomingMovies ||
    selectGettingTrendingMovies ||
    selectGettingConfigs,
  movieGenre: selectMoviesGenres
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withSpinner
)(MoviesPage);
