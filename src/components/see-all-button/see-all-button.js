import React from "react";

import styles from "./see-all-button.module.css";

const SellAllButton = ({
  count = null,
  link = null,
  position = null,
  bottom = 1,
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
      <a href={link} className={styles.buttonLink}>
        <span className={styles.buttonText}>See all {count}</span>
        <span className={styles.buttonIcon}>&#10230;</span>
      </a>
    </div>
  );
};

export default SellAllButton;
