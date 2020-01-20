import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

const Header = () => {
  const [headerBackOpacity, setHeaderBackOpacity] = useState(0.025);
  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setHeaderBackOpacity(1);
    } else {
      setHeaderBackOpacity(0.025);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: `rgba(0,0,0, ${headerBackOpacity})` }}
    >
      {/* Header Container */}
      <div className={styles.header_container}>
        {/* Header branch or logo */}
        <div className={styles.header_brand}>
          <Link to="/">AmetBox</Link>
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
