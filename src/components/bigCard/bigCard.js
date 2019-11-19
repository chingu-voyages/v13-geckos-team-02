import React from "react";

import styles from "./bigCard.module.css";

import BigCardContainer from "./bigCardContainer";
import BigCardMovieInfo from "../bigCardMovieInfo/bigCardMovieInfo";

const BigCard = ({ imageUrl = null, name, rating, restriction, genre }) => (
  <div>
    <BigCardContainer imageUrl={imageUrl}>
      <BigCardMovieInfo
        name={name}
        rating={rating}
        restriction={restriction}
        genre={genre}
      >
        <h1 className={styles.lastMovieText}>LATEST MOVIE</h1>
      </BigCardMovieInfo>
    </BigCardContainer>
  </div>
);

export default BigCard;
