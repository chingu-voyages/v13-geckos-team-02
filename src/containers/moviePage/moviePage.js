import React from "react";

import styles from "./moviePage.module.css";

// COMPONENTS
import Overview from "../../components/overview/overview";
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit";

const MoviePage = () => {
  return (
    <div>
      <div className={styles.moviePage}>
        <div className={styles.moviePage_sideBar_container}>
          <h1>Side Bar</h1>
        </div>
        <div className={styles.moviePage_content_container}>
          <Overview content={content} />
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
