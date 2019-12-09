import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";

import styles from "./portraitCard.module.css";
import { ReactComponent as WatchListIconEmptyDark } from "../../assets/icons/watchlist-icon-empty-dark.svg";
import { ReactComponent as InformationIcon } from "../../assets/icons/information-icon.svg";
import { ReactComponent as WatchListIconLike } from "../../assets/icons/watchlist-icon-like.svg";
import { ReactComponent as PlayButton } from "../../assets/icons/play-button.svg";

const PortraitCard = ({ imagePath, movie, toPage, history }) => {
  const mediaType =
    (movie.mediaType !== undefined) & (movie.mediaType === "tv")
      ? "series"
      : toPage;
  return (
    <div
      style={{
        background: `url(${imagePath}${movie.poster_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className={styles.portraitCard}
      onClick={() => history.push(`/${mediaType}/${movie.id}`)}
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
