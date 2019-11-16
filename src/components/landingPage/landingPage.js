import React from "react";

import styles from "./landingPage.module.css";
import BigCard from "../bigCard/bigCard";

const LandingPage = ({ imageUrl, children }) => {
  const landingPageStyles = {
    position: "absolute",
    backgroundImage: `url(${imageUrl})`,
    background: "#00000067 0 % 0 % no-repeat padding-box",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "100vh",
    width: "100vw",
    filter: "blur(50px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "-100"
  };
  return (
    <div>
      <div style={landingPageStyles}></div>
      <div className={styles.landingPageSection}>
        <div className="big-section">
          <BigCard
            imageUrl={imageUrl}
            name="Terminator:dark fate"
            rating="7.6"
            restriction="16+"
            genre="action, sci-fi"
          ></BigCard>
        </div>
        <div className="small-section"></div>
      </div>
      <div className={styles.landingCover}></div>
    </div>
  );
};

export default LandingPage;
