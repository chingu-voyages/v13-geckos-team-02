import React from "react";

import styles from "./moviePage.module.css";

// COMPONENTS
import Overview from "../../components/overview/overview";
import SmallCard from "../../components/smallCard/smallCard";
import SideBarMovieInfo from "../../components/sideBarMoreInfo/sideBarMoreInfo";
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit";
const name = "Terminator:dark fate";
const categories = ["action", "sci-fi", "thriller", "drama"];
const releaseDate = "november 25, 2019";
const length = "2hr 40min";
const director = "ridley mark";
const writers = ["john doe", "jane hunt"];

const MoviePage = () => {
  return (
    <div>
      <div className={styles.moviePage}>
        <div className={styles.moviePage_sideBar_container}>
          <div className={styles.sideBar_content_container}>
            {/* Movie Poster */}
            <SmallCard
              imageUrl={`https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80`}
              height={"150px"}
            />
            {/* Movie Name */}
            <h2 className={styles.movieName}>{name}</h2>
            {/* More Movie Info */}
            <SideBarMovieInfo
              categories={categories}
              director={director}
              writers={writers}
              length={length}
              releaseDate={releaseDate}
              newtworkLogo={
                "https://www.thewrap.com/wp-content/uploads/2014/12/hbo-logo.jpg"
              }
            />
          </div>
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
