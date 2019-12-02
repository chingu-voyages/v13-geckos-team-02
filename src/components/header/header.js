import React from "react";
import { Link } from "react-router-dom";
// IMPORTING SVGS
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as WatchListIcon } from "../../assets/icons/watchlist-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification-icon.svg";

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
              <Link to="/">Now playing</Link>
              <Link to="/">Trending</Link>
              <Link to="/">Latest</Link>
              <Link to="/">Top rated</Link>
              <Link to="/">upcoming</Link>
            </div>
          </div>
          {/* <li className={styles.header_nav_menu_link}> */}
          <div className={styles.dropdown}>
            <div className={styles.dropdown_button}>Series</div>
            <div className={styles.dropdown_content}>
              <Link to="/">tv airing today</Link>
              <Link to="/">tv on air</Link>
              <Link to="/">Latest</Link>
              <Link to="/">popular</Link>
              <Link to="/">top rated</Link>
            </div>
          </div>
        </div>
        {/* Header search bar */}
        <div className={styles.search}>
          {/* <input placeholder="Search for movies" name="search" /> */}
          <SearchIcon className={styles.icon} />
        </div>
        {/* Header Watchlist, notification, and user*/}
        <div className={styles.utilitiesBar}>
          <span>
            <WatchListIcon />
            Watchlist
          </span>
          <span>
            <NotificationIcon className={styles.icon} />
          </span>
          <span>User, John</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
