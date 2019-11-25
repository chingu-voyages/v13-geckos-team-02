import React from "react";

import styles from "./landingSection.module.css";
import BigCard from "../bigCard/bigCard";
import SmallCard from "../smallCard/smallCard";

const LandingSection = ({ imageUrl }) => {
  const blurryStyles = {
    background: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    width: "100%",
    height: "92vh",
    filter: "blur(10px)",
    opacity: "1"
  };
  return (
    <div className={styles.landingSection}>
      {/* Background providing blurry image effect */}
      <div className={styles.blurry} style={blurryStyles}></div>
      {/* Backgroun providing gradient dark cover on the landing section */}
      <div className={styles.landingCover}></div>
      {/* Container for the big card */}
      <div className={styles.cardsContainer}>
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
          <SmallCard
            name="the king"
            imageUrl={imageUrl}
            position={"relative"}
          />
          <SmallCard
            name="the king"
            imageUrl={imageUrl}
            position={"relative"}
          />
          <SmallCard
            name="the king"
            imageUrl={imageUrl}
            position={"relative"}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
