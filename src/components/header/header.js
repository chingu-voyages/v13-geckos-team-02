import React, { useState } from "react";
import { Link } from "react-router-dom";
// IMPORTING SVGS
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as WatchListIcon } from "../../assets/icons/watchlist-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification-icon.svg";

import styles from "./header.module.css";

const Header = () => {
  const [showDropdown, setDropdown] = useState(false);
  return (
    <header className={styles.header}>
      {/* Header Container */}
      <div className={styles.header_container}>
        {/* Header branch or logo */}
        <div className={styles.header_brand}>
          <h1>ScribFix</h1>
        </div>
        {/* Hader navigations */}
        <div className={styles.header_nav}>
          <ul className={styles.header_nav_menu}>
            <li className={styles.header_nav_menu_link}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.header_nav_menu_link}>
              <a href="#" onClick={() => setDropdown(!showDropdown)}>
                Movie
              </a>
              {showDropdown ? (
                <div className={styles.menu_link_dropdown}>
                  <ul>
                    <li>Now playing movies</li>
                    <li>Trending movies</li>
                    <li>Latest movies</li>
                    <li>Top rated</li>
                    <li>upcoming</li>
                  </ul>
                </div>
              ) : null}
            </li>
            <li className={styles.header_nav_menu_link}>
              <Link to="/series">Series</Link>
            </li>
          </ul>
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
