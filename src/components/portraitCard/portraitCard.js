import React from "react";

import styles from "./portraitCard.module.css";

const PortraitCard = () => {
  const imageUrl = `https://images.unsplash.com/photo-1568896597888-d674b61e7067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80`;
  const portraitCardStyles = {
    position: "relative",
    height: "210px",
    width: "150px",
    background: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  };
  return (
    <div style={portraitCardStyles}>
      <div className={styles.portraitCard_footer}>
        <div>
          <h5 className={styles.portraitCard_footer_name}>
            Terminator: Dark Fate
          </h5>
        </div>
        <span className={styles.portraitCard_footer_season}>1 season</span>
      </div>
    </div>
  );
};

export default PortraitCard;
