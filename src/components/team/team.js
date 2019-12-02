import React from "react";

import styles from "./team.module.css";

const Team = ({ imageUrl, job, name }) => (
  <div
    className={styles.team_member_card}
    style={{
      background: `url(${imageUrl})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}
  >
    {/* CARD CONTAINER FOR REAL NAME OR AKA */}
    <div className={styles.team_member_card_footer}>
      <h5 className={styles.team_member_card_footer_realName}>{name}</h5>
      <h6 className={styles.team_member_card_footer_actingName}>
        <span>as</span> {job}
      </h6>
    </div>
  </div>
);

export default Team;
