import React from "react";
// IMPORTING COMPONENTS
import SeeAllButton from "../see-all-button/see-all-button";
import WithSpinner from "../withSpinner/withSpinner";
// STYLES
import styles from "./categorySection.module.css";

const CategorySection = ({
  heading,
  data,
  children,
  toPageForButton,
  usedBySimilar = false
}) => (
  <div className={styles.categorySection}>
    <div className={styles.categoryHeader}>
      <div className={styles.categoryHeading}>
        <h3>{heading}</h3>
      </div>
      {!usedBySimilar ? (
        <div className={styles.categoryButton}>
          <SeeAllButton count={data.length} link={toPageForButton} />
        </div>
      ) : null}
    </div>
    <div className={styles.categoryBody}>{children}</div>
  </div>
);

export default WithSpinner(CategorySection);
