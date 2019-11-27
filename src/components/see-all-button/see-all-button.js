import React from "react";
import { Link } from "react-router-dom";

import styles from "./see-all-button.module.css";

const SellAllButton = ({
  count = null,
  link = "/",
  position = null,
  bottom = 0,
  right = 2,
  zIndex = 11
}) => {
  const buttonStyles = {
    position: `${position}`,
    bottom: `${bottom}rem`,
    right: `${right}rem`,
    zIndex: `${zIndex}`
  };
  return (
    <div className={styles.buttonBox} style={buttonStyles}>
      <Link to={link} className={styles.buttonLink}>
        <span className={styles.buttonText}>See all {count}</span>
        <span className={styles.buttonIcon}>&#10230;</span>
      </Link>
    </div>
  );
};

export default SellAllButton;
