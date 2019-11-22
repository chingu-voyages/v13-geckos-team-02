import React from "react";

import styles from "./bigCard.module.css";

import BigCardMovieInfo from "../bigCardMovieInfo/bigCardMovieInfo";

const BigCard = ({ imageUrl = null, name, rating, restriction, genre }) => {
  const bigCardStyles = {
    position: "relative",
    background: `url(${imageUrl})`,
    textAlign: "left",
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };
  return (
    <div className={styles.bigCard} style={bigCardStyles}>
      <BigCardMovieInfo
        name={name}
        rating={rating}
        restriction={restriction}
        genre={genre}
      >
        <h1 className={styles.lastMovieText}>LATEST MOVIE</h1>
      </BigCardMovieInfo>
    </div>
  );
};

export default BigCard;
