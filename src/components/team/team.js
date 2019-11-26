import React from "react";

import styles from "./team.module.css";

const Team = ({ heading, list = [] }) => {
  const actingName = "Mark Roll";

  return list.length > 0 ? (
    <div className={styles.team_container}>
      {/* COMPONENT HEADING */}
      <h2 className={styles.team_heading}>{heading}</h2>
      {/* CARD CONTAINER */}
      <div className={styles.team_member_card_container}>
        {/* CARD  */}
        {list.map(company => (
          <div
            className={styles.team_member_card}
            style={{
              background: `url(${company.imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            {/* CARD CONTAINER FOR REAL NAME OR AKA */}
            <div className={styles.team_member_card_footer}>
              <h5 className={styles.team_member_card_footer_realName}>
                Hello world
              </h5>
              <h6 className={styles.team_member_card_footer_actingName}>
                <span>as</span> {actingName}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Team;
