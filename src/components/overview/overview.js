import React from "react";

import styles from "./overview.module.css";

const Overview = ({ content = null }) => (
  <div className={styles.overview}>
    <h2 className={styles.overview_heading}>Overview</h2>
    <p className={styles.overview_content}>{content}</p>
  </div>
);

export default Overview;
