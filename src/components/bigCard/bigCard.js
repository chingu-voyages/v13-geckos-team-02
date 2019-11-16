import React from "react";

import styles from "./bigCard.module.css";

import BigCardContainer from "./bigCardContainer";
import BigCardMovieInfo from "../bigCardMovieInfo/bigCardMovieInfo";

const BigCard = ({ imageUrl = null }) => (
  <div>
    <BigCardContainer imageUrl={imageUrl}>
      <BigCardMovieInfo
        name="Terminator:Dark Fate"
        rating="7.5"
        restriction="16+"
        genre="action, sci-fi"
      >
        <h1 className={styles.lastMovieText}>LATEST MOVIE</h1>
      </BigCardMovieInfo>
    </BigCardContainer>
  </div>
);

export default BigCard;
