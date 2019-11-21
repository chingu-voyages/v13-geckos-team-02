import React from "react";
import SeeAllButton from "../see-all-button/see-all-button";
import PortraitCard from "../portraitCard/portraitCard";

import styles from "./categorySection.module.css";

const CategorySection = ({ heading, count }) => (
  <div className={styles.categorySection}>
    <div className={styles.categoryHeader}>
      <div className={styles.categoryHeading}>
        <h3>{heading}</h3>
      </div>
      <div className={styles.categoryButton}>
        <SeeAllButton count={count} />
      </div>
    </div>
    <div className={styles.categoryBody}>
      <PortraitCard />
      <PortraitCard watchlisted={true} />
    </div>
  </div>
);

export default CategorySection;
