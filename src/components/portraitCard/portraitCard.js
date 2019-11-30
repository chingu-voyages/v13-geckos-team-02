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

const PortraitCard = ({
  imagePath,
  posterUrl,
  imageUrl,
  title,
  rating,
  watchlisted = null
}) => (
  <div className={styles.portraitCardContainer}>
    {/* STATIC PORTRAIT CARD */}
    <div className={styles.portraitCardBox}>
      <div
        style={{
          background: `url(${imagePath}${posterUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        className={styles.portraitCard}
      ></div>
      {/* DYNAMIC PORTRAIT CARD */}
      <div className={styles.portraitCardDynamic}>
        <div
          style={{
            background: `url(${imagePath}${imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          className={styles.portraitCardDynamicCard}
        >
          <PlayButton className={styles.playButton} />
        </div>
        <div className={styles.portraitCardDynamic_footer_sub}>
          <div className={styles.portraitCardDynamic_footer_sub_details}>
            <div className={styles.portraitCardDynamic_footer_sub_details_1}>
              <span>2019</span>
              <span>&#8226;</span>
              <span>2 episodes</span>
            </div>
            <div>
              <span>drama, satire, newsroom</span>
            </div>
          </div>
          <div className={styles.portraitCardDynamic_footer_sub_icons}>
            <span>
              {watchlisted ? <WatchListIconLike /> : <WatchListIconEmptyDark />}
            </span>
            <span>
              <InformationIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath
});

export default connect(mapStateToProps)(PortraitCard);
