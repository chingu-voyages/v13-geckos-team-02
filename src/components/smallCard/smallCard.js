import React from "react";

import styles from "./smallCard.module.css";

const SmallCard = ({ imageUrl, movieName }) => {
  const smallCardStyles = {
    position: "relative",
    background: `url(${imageUrl}) #000`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "left",
    width: "400px",
    height: "280px"
  };
  return (
    <div style={smallCardStyles}>
      <h2 className={styles.movieName}>Terminator:dark fate</h2>
    </div>
  );
};

export default SmallCard;
