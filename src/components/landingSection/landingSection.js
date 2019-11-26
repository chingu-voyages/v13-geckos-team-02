import React from "react";
import { connect } from "react-redux";
// IMPORTING REDUX

// IMPORTING COMPONENTS
import styles from "./landingSection.module.css";
import BigCard from "../bigCard/bigCard";
import SmallCard from "../smallCard/smallCard";
import SellAllButton from "../see-all-button/see-all-button";

const LandingSection = ({ imageUrl, nowPlayingMovies }) => {
  const { results, page, total_results, total_pages } = nowPlayingMovies;
  return (
    <div className={styles.landingSection}>
      {/* Background providing blurry image effect */}
      <div
        className={styles.blurry}
        style={{
          background: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      ></div>
      {/* Backgroun providing gradient dark cover on the landing section */}
      <div className={styles.landingCover}></div>
      {/* Container for the big card */}
      <div className={styles.cardsContainer}>
        <div className={styles.bigSection}>
          <BigCard
            imageUrl={imageUrl}
            name="Terminator:dark fate"
            rating="7.6"
            restriction="16+"
            genre="action, sci-fi"
          />
        </div>
        {/* Container for the small cards */}
        <div className={styles.smallSection}>
          <SmallCard
            name="the king"
            imageUrl={imageUrl}
            position={"relative"}
          />
          <SmallCard
            name="the king"
            imageUrl={imageUrl}
            position={"relative"}
          />
          <SmallCard
            name="the king"
            imageUrl={imageUrl}
            position={"relative"}
          />
        </div>
        <SellAllButton position={"absolute"} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({
  nowPlayingMovies: movies.nowPlayingMovies
});

export default connect(mapStateToProps)(LandingSection);
