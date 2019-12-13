import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING TYPES
import SeriesTypes from "../../redux/series/series.types";
// IMPORTING REDUX ACTIONS
import { getOnTheAirSeriesStart } from "../../redux/series/series.action";
// IMPORTING COMPONENTS
import PortraitCard from "../../components/portraitCard/portraitCard";
// import ToggleButton from "../../components/toggleButton/toggleButton";
import withSpinner from "../../components/withSpinner/withSpinner";
import Pagination from "../../components/pagination/pagination";
// IMPORTING STYLES
import styles from "./seriesPage.module.css";

const SeriesPage = ({
  series,
  match,
  history,
  currentPage,
  paginationRange,
  setPagination,
  fetchOnAirSeries
}) => {
  //   const [seriesType, setSeriesType] = useState("nowPlayingMovies");
  //   const [seriesTypeTitle, setSeriesTypeTitle] = useState("Now Playing Movies");
  //   useEffect(() => {
  //     console.log(match.params);
  //     history.push(`/${match.url}/${currentPage}`);
  //     // fetchNowPlayingMovies();
  //     // switch (params.type_path) {
  //     //   case "now_playing":
  //     //     setMoviesType("nowPlayingMovies");
  //     //     fetchNowPlayingMovies();
  //     //     setMoviesTypeTitle("Now Playing Movies");
  //     //     break;
  //     //   case "trending":
  //     //     setMoviesType("trendingMovies");
  //     //     setMoviesTypeTitle("Trending Movies");
  //     //     break;
  //     //   case "popular":
  //     //     setMoviesType("popularMovies");
  //     //     setMoviesTypeTitle("Popular Movies");
  //     //     break;
  //     //   case "top_rated":
  //     //     setMoviesType("topRatedMovies");
  //     //     setMoviesTypeTitle("Top Rated Movies");
  //     //     break;
  //     //   case "upcoming":
  //     //     setMoviesType("upcomingMovies");
  //     //     setMoviesTypeTitle("Upcoming Movies");
  //     //     break;
  //     //   default:
  //     //     return;
  //     // }
  //   }, [match.params, match.url, currentPage, history]);
  //   const newMovies = movies[moviesType] ? movies[moviesType] : [];
  const newMovies = fetchOnAirSeries;
  return (
    <div className={styles.seriesPage_container}>
      <h1>{"moviesTypeTitle"}</h1>
      <Pagination
        currentPage={currentPage}
        paginationRange={paginationRange}
        totalPages={newMovies.total_pages}
        setPagination={setPagination}
      />
      <div className={styles.seriesPage_body}>
        {newMovies.length !== 0
          ? newMovies.results.map(movie => (
              <PortraitCard key={movie.id} movie={movie} toPage={"series"} />
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
const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({
  fetchOnAirTheSeries: (type, page) =>
    dispatch(getOnTheAirSeriesStart(type, page))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withSpinner
)(SeriesPage);
