import React from "react";

import styles from "./smallCard.module.css";

const SmallCard = ({ imageUrl, name }) => {
  const smallCardStyles = {
    position: "relative",
    background: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "left",
    width: "100%",
    height: "31%"
  };
  return (
    <div style={smallCardStyles}>
      <h2 className={styles.movieName}>{name}</h2>
    </div>
  );
};

export default SmallCard;
