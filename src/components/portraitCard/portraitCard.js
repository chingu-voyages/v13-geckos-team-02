import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";
import PosterPlaceholder from "../../assets/images/movie-poster-placeholder@2x.png";

import styles from "./portraitCard.module.css";

const PortraitCard = ({ imagePath, movie, toPage, history }) => {
  const imageUrl = movie.poster_path
    ? `${imagePath}${movie.poster_path}`
    : PosterPlaceholder;
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className={styles.portraitCard}
      onClick={() => history.push(`/${toPage}/${movie.id}`)}
    >
      <div className={styles.portraitCard_footer}>
        <h3 className={styles.portraitCard_footer_name}>{movie.title}</h3>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath
});

export default connect(mapStateToProps)(withRouter(PortraitCard));
