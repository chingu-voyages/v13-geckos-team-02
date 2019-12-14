import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";

import styles from "./portraitCard.module.css";

const PortraitCard = ({ imagePath, movie, toPage, history }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imagePath}${movie.poster_path})`,
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
