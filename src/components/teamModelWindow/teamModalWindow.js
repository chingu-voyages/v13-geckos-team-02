import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING SELECTORS
import {
  selectGettingPerson,
  selectPersonDetails
} from "../../redux/person/person.selector";
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";
// IMPORTING FUNCTIONS
import { formateDate } from "../../functions/functions";
// IMPORTING REDUX ACTIONS
import { toggleModalWindow } from "../../redux/person/person.action";
// IMPORTING SPINNER
import WithSpinner from "../withSpinner/withSpinner";
// IMPORTING STYLES
import styles from "./teamModalWindow.module.css";
import TeamPlaceholder from "../../assets/images/team-placeholder@2x.png";

const TeamModalWindow = ({ toggleModalWindow, imagePath, personDetails }) => {
  const imageUrl = personDetails.profile_path
    ? `${imagePath}/${personDetails.profile_path}`
    : TeamPlaceholder;
  return personDetails ? (
    <div className={styles.teamModalWindow}>
      <div className={styles.modal__page}>
        <span
          className={styles.modal__close__button}
          onClick={() => toggleModalWindow()}
        >
          &#x2715;
        </span>
        <div className={styles.modal__top}>
          <div
            className={styles.modal__top__image}
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
          />
          <div className={styles.modal__top__details}>
            <h3>{personDetails.name}</h3>
            <p>
              {personDetails.birthday
                ? formateDate(personDetails.birthday)
                : null}
            </p>
            <p>{personDetails.place_of_birth}</p>
          </div>
        </div>
        <h4>Know for {personDetails.known_for_department}</h4>
        <div className={styles.modal__body}>
          <p>{personDetails.biography}</p>
        </div>
      </div>
    </div>
  ) : null;
};
const mapStateToProps = createStructuredSelector({
  isFetching: selectGettingPerson,
  personDetails: selectPersonDetails,
  imagePath: selectImagePath
});
const mapDispatchToProps = disaptch => ({
  toggleModalWindow: () => disaptch(toggleModalWindow())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithSpinner(TeamModalWindow));
