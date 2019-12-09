import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";

import styles from "./portraitCard.module.css";
import { ReactComponent as WatchListIconEmptyDark } from "../../assets/icons/watchlist-icon-empty-dark.svg";
import { ReactComponent as InformationIcon } from "../../assets/icons/information-icon.svg";
import { ReactComponent as WatchListIconLike } from "../../assets/icons/watchlist-icon-like.svg";
import { ReactComponent as PlayButton } from "../../assets/icons/play-button.svg";

const PortraitCard = ({ imagePath, movie, watchlisted = null }) => (
  <div
    style={{
      background: `url(${imagePath}${movie.poster_path})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}
    className={styles.portraitCard}
  ></div>
);
const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath
});

export default connect(mapStateToProps)(PortraitCard);
