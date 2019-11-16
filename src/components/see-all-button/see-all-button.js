import React from "react";

import styles from "./see-all-button.module.css";

const SellAllButton = ({ count = null, link }) => (
  <div classNam={styles.buttonBox}>
    <a href={link} className={styles.buttonLink}>
      <span>See all {count}</span>
      <span>&#8594;</span>
    </a>
  </div>
);

export default SellAllButton;
