import React from "react";

import styles from "./landingSection.module.css";
import BigCard from "../bigCard/bigCard";
import SmallCard from "../smallCard/smallCard";

const LandingSection = ({ imageUrl }) => {
  return (
    <div className={styles.landingSection}>
      {/* Container for the big card */}
      <div className={styles.bigSection}>
        <BigCard
          imageUrl={imageUrl}
          name="Terminator:dark fate"
          rating="7.6"
          restriction="16+"
          genre="action, sci-fi"
        />
      </div>
      {/* Container for the small cards */}
      <div className={styles.smallSection}>
        <SmallCard name="the king" imageUrl={imageUrl} />
        <SmallCard name="the king" imageUrl={imageUrl} />
        <SmallCard name="the king" imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default LandingSection;
