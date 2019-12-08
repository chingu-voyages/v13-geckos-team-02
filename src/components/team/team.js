import React from "react";
import { connect } from "react-redux";

import styles from "./team.module.css";
// IMPORTING REDUX ACTION
import { toggleModalWindow } from "../../redux/person/person.action";

const Team = ({ imageUrl, job, name, toggleModalWindow }) => (
  <div
    className={styles.team_member_card}
    style={{ backgroundImage: `url(${imageUrl})` }}
    onClick={() => toggleModalWindow()}
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

const mapDispatchToProps = disaptch => ({
  toggleModalWindow: () => disaptch(toggleModalWindow())
});

export default connect(null, mapDispatchToProps)(Team);
