import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// IMPORTING REDUX ACTIONS
import {
  getNowPlayingStart,
  getTrendingMoviesStart,
  getPopularMoviesStart,
  getTopRatedMoviesStart,
  getUpcomingMoviesStart
} from "../../redux/movies/movies.action";
// IMPORTING SVGS
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as WatchListIcon } from "../../assets/icons/watchlist-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification-icon.svg";

import styles from "./header.module.css";

const Header = ({
  getNowPlaying,
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies
}) => {
  return (
    <header className={styles.header}>
      {/* Header Container */}
      <div className={styles.header_container}>
        {/* Header branch or logo */}
        <div className={styles.header_brand}>
          <div>
            <Link to="/">ScribFix</Link>
          </div>
        </div>
        {/* Hader navigations */}
        <div className={styles.header_nav}>
          <Link to="/">Home</Link>
          <div className={styles.dropdown}>
            <div className={styles.dropdown_button}>Movie</div>
            <div className={styles.dropdown_content}>
              <Link to="/movies/now_playing">Now playing</Link>
              <Link to="/movies/upcoming" onClick={() => getUpcomingMovies()}>
                upcoming
              </Link>
              <Link to="/movies/top_rated" onClick={() => getTopRatedMovies()}>
                Top rated
              </Link>
              <Link to="/movies/trending" onClick={() => getTrendingMovies()}>
                Trending
              </Link>
              <Link to="/movies/popular" onClick={() => getPopularMovies()}>
                popular
              </Link>
            </div>
          </div>
          {/* <li className={styles.header_nav_menu_link}> */}
          <div className={styles.dropdown}>
            <div className={styles.dropdown_button}>Series</div>
            <div className={styles.dropdown_content}>
              <Link to="/series/airing_today">airing today</Link>
              <Link to="/series/on_the_air">on the air </Link>
              <Link to="/series/top_rated">top rated</Link>
              <Link to="/series/trending">trending</Link>
              <Link to="/series/popular">popular</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  getNowPlaying: () => dispatch(getNowPlayingStart()),
  getTrendingMovies: () => dispatch(getTrendingMoviesStart()),
  getPopularMovies: () => dispatch(getPopularMoviesStart()),
  getTopRatedMovies: () => dispatch(getTopRatedMoviesStart()),
  getUpcomingMovies: () => dispatch(getUpcomingMoviesStart())
});

export default connect(null, mapDispatchToProps)(Header);
