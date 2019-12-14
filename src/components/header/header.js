import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

const Header = () => {
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
              <Link to="/movies/upcoming">upcoming</Link>
              <Link to="/movies/top_rated">Top rated</Link>
              <Link to="/movies/trending">Trending</Link>
              <Link to="/movies/popular">popular</Link>
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

export default Header;
