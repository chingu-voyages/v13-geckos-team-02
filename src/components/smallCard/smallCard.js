import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./smallCard.module.css";

const SmallCard = ({
  imageUrl,
  name = null,
  position = null,
  width = "100%",
  height = "31.7%",
  backgroundSize = "cover",
  history,
  id
}) => {
  const smallCardStyles = {
    position: `${position}`,
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: `${backgroundSize}`,
    textAlign: "left",
    width: `${width}`,
    height: `${height}`
  };
  return (
    <div style={smallCardStyles}>
      <h2
        onClick={() => history.push(`movie/${id}`)}
        className={styles.movieName}
      >
        {name}
      </h2>
    </div>
  );
};

export default withRouter(SmallCard);
