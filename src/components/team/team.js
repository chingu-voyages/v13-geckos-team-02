import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";

import TeamPlaceholder from "../../assets/images/team-placeholder@2x.png";
import styles from "./team.module.css";
// IMPORTING REDUX ACTION
import {
  toggleModalWindow,
  getPersonDetailsStart
} from "../../redux/person/person.action";
import WithSpinner from "../withSpinner/withSpinner";

const Team = ({
  id,
  imagePath,
  imageUrl,
  job,
  name,
  toggleModalWindow,
  getPersonDetails,
  as = true
}) => {
  const imageLink = imageUrl ? `${imagePath}/${imageUrl}` : TeamPlaceholder;
  return (
    <div
      className={styles.team_member_card}
      style={{ backgroundImage: `url(${imageLink})` }}
      onClick={() => {
        getPersonDetails(id);
        toggleModalWindow();
      }}
    >
      {/* CARD CONTAINER FOR REAL NAME OR AKA */}
      <div className={styles.team_member_card_footer}>
        <h5 className={styles.team_member_card_footer_realName}>{name}</h5>
        <h6 className={styles.team_member_card_footer_actingName}>
          {as ? <span>as</span> : null} {job}
        </h6>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath
});
const mapDispatchToProps = disaptch => ({
  toggleModalWindow: () => disaptch(toggleModalWindow()),
  getPersonDetails: id => disaptch(getPersonDetailsStart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WithSpinner(Team));
