import React from "react";

import styles from "./smallCard.module.css";

const SmallCard = ({
  imageUrl,
  name = null,
  position = null,
  width = "100%",
  height = "31%",
  backgroundSize = "cover"
}) => {
  const smallCardStyles = {
    position: `${position}`,
    background: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: `${backgroundSize}`,
    textAlign: "left",
    width: `${width}`,
    height: `${height}`
  };
  return (
    <div style={smallCardStyles}>
      <h2 className={styles.movieName}>{name}</h2>
    </div>
  );
};

export default SmallCard;
