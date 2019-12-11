import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// IMPORTING REDUX ACTIONS
import { setPagination } from "../../redux/appConfig/appConfig.action";

// IMPORTING RESELECTS
import {
  selectGettingConfigs,
  selectCurrentPage,
  selectPaginationRange
} from "../../redux/appConfig/appConfig.selector";
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

const MoviesPage = ({
  movies,
  match: { params },
  currentPage,
  paginationRange,
  setPagination
}) => {
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
        <button
          onClick={() => setPagination(currentPage - 1, newMovies.total_pages)}
        >
          Prev
        </button>
        <button>{currentPage}</button>
        <span>...</span>
        {paginationRange.map(number => (
          <button
            key={number}
            className={
              number === currentPage
                ? styles.moviesPage_footer_button_active
                : null
            }
            onClick={() => setPagination(number, newMovies.total_pages)}
          >
            {number}
          </button>
        ))}

        <span>...</span>
        <button>{newMovies.total_pages}</button>
        <button
          onClick={() => setPagination(currentPage + 1, newMovies.total_pages)}
        >
          Next
        </button>
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
  movieGenre: selectMoviesGenres,
  // PAGINATION
  currentPage: selectCurrentPage,
  paginationRange: selectPaginationRange
});

const mapDispatchToProps = dispatch => ({
  setPagination: (number, total) => dispatch(setPagination(number, total))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withSpinner
)(MoviesPage);
