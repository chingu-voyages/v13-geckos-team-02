import React from "react";

import styles from "./bigCard.module.css";

import BigCardMovieInfo from "../bigCardMovieInfo/bigCardMovieInfo";

const BigCard = ({
  imageUrl = null,
  name,
  rating,
  restriction,
  genre,
  id,
  genreIds,
  backgroundPosition = "center",
  usedBySeries = false,
  width = "100%"
}) => {
  const bigCardStyles = {
    position: "relative",
    backgroundImage: `url(${imageUrl})`,
    textAlign: "left",
    height: "100%",
    width: `${width}`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${backgroundPosition}`,
    backgroundSize: "cover",
    margin: "auto"
  };
  return (
    <div className={styles.bigCard} style={bigCardStyles}>
      <BigCardMovieInfo
        name={name}
        rating={rating}
        restriction={restriction}
        genre={genre}
        id={id}
        genreIds={genreIds}
        usedBySeries={usedBySeries}
      >
        {usedBySeries ? null : (
          <h1 className={styles.lastMovieText}>LATEST MOVIE</h1>
        )}
      </BigCardMovieInfo>
    </div>
  );
};

export default BigCard;
