import React from "react";
// IMPORTING COMPONENTS
import SeeAllButton from "../see-all-button/see-all-button";
import PortraitCard from "../portraitCard/portraitCard";
import WithSpinner from "../withSpinner/withSpinner";
// STYLES
import styles from "./categorySection.module.css";

const CategorySection = ({
  heading,
  values,
  toPageforCard,
  toPageForButton
}) => (
  <div className={styles.categorySection}>
    <div className={styles.categoryHeader}>
      <div className={styles.categoryHeading}>
        <h3>{heading}</h3>
      </div>
      <div className={styles.categoryButton}>
        <SeeAllButton count={values.length} link={toPageForButton} />
      </div>
    </div>
    <div className={styles.categoryBody}>
      {values
        .filter((idx, item) => item < 10)
        .map(tv => (
          <PortraitCard key={tv.id} movie={tv} toPage={toPageforCard} />
        ))}
    </div>
  </div>
);

export default WithSpinner(CategorySection);
