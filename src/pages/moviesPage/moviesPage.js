import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING REDUX ACTIONS
import { setPaginationStart } from "../../redux/appConfig/appConfig.action";
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
// IMPORTING REDUX ACTIONS
import { getNowPlayingStart } from "../../redux/movies/movies.action";
// IMPORTING STYLES
import styles from "./moviesPage.module.css";
// IMPORTING COMPONENTS
import PortraitCard from "../../components/portraitCard/portraitCard";
import ToggleButton from "../../components/toggleButton/toggleButton";
import withSpinner from "../../components/withSpinner/withSpinner";
import Pagination from "../../components/pagination/pagination";

const MoviesPage = ({
  movies,
  match,
  history,
  currentPage,
  paginationRange,
  setPagination,
  fetchNowPlayingMovies
}) => {
  const [moviesType, setMoviesType] = useState("nowPlayingMovies");
  const [moviesTypeTitle, setMoviesTypeTitle] = useState("Now Playing Movies");
  useEffect(() => {
    console.log(match.params);
    history.push(`/${match.url}/${currentPage}`);
    // fetchNowPlayingMovies();
    // switch (params.type_path) {
    //   case "now_playing":
    //     setMoviesType("nowPlayingMovies");
    //     fetchNowPlayingMovies();
    //     setMoviesTypeTitle("Now Playing Movies");
    //     break;
    //   case "trending":
    //     setMoviesType("trendingMovies");
    //     setMoviesTypeTitle("Trending Movies");
    //     break;
    //   case "popular":
    //     setMoviesType("popularMovies");
    //     setMoviesTypeTitle("Popular Movies");
    //     break;
    //   case "top_rated":
    //     setMoviesType("topRatedMovies");
    //     setMoviesTypeTitle("Top Rated Movies");
    //     break;
    //   case "upcoming":
    //     setMoviesType("upcomingMovies");
    //     setMoviesTypeTitle("Upcoming Movies");
    //     break;
    //   default:
    //     return;
    // }
  }, [match.params, match.url, currentPage, history]);
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
      <Pagination
        currentPage={currentPage}
        paginationRange={paginationRange}
        totalPages={newMovies.total_pages}
        setPagination={setPagination}
      />
      <div className={styles.moviesPage_body}>
        {newMovies.length !== 0
          ? newMovies.results.map(movie => (
              <PortraitCard key={movie.id} movie={movie} toPage={"movie"} />
            ))
          : null}
      </div>
      <Pagination
        currentPage={currentPage}
        paginationRange={paginationRange}
        totalPages={newMovies.total_pages}
      />
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
  fetchNowPlayingMovies: page => dispatch(getNowPlayingStart(page))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withSpinner
)(MoviesPage);
