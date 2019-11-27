import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import { selectImagePath } from "../../redux/appConfig/appConfig.selector";

import styles from "./portraitCard.module.css";
import { ReactComponent as WatchListIconEmpty } from "../../assets/icons/watchlist-icon-empty.svg";
import { ReactComponent as InformationIcon } from "../../assets/icons/information-icon.svg";
import { ReactComponent as WatchListIconLike } from "../../assets/icons/watchlist-icon-like.svg";

const PortraitCard = ({
  imagePath,
  imageUrl,
  title,
  rating,
  watchlisted = null
}) => {
  const [showPortrait, setShowPortrait] = useState(null);
  const video = "https://www.youtube.com/embed/A-eobLIY-yE";
  const portraitCardStyles = {
    background: `url(${imagePath}${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className={styles.portraitCardContainer}>
      {/* STATIC PORTRAIT CARD */}
      <div
        style={portraitCardStyles}
        className={styles.portraitCard}
        // onMouseOver={() => setShowPortrait(true)}
      >
        <div className={styles.portraitCard_footer}>
          <div>
            <h5 className={styles.portraitCard_footer_name}>{title}</h5>
          </div>
          <span className={styles.portraitCard_footer_season}>{rating}</span>
        </div>
      </div>
      {/* DYNAMIC PORTRAIT CARD */}
      {showPortrait ? (
        <div
          className={styles.portraitCardDynamicBackground}
          onMouseOut={() => setShowPortrait(false)}
        >
          <div className={styles.portraitCardDynamic}>
            <div className={styles.portraitCardDynamicVideo}>
              <iframe
                title={"Video"}
                height="250px"
                width="180px"
                src="https://www.youtube.com/embed/A-eobLIY-yE"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <video autoPlay muted loop src={video}></video>
            </div>
            <div className={styles.portraitCardDynamic_footer}>
              <div>
                <h5 className={styles.portraitCardDynamic_footer_name}>
                  Terminator: Dark Fate
                </h5>
              </div>
              <span className={styles.portraitCardDynamic_footer_season}>
                1 season
              </span>
            </div>
            <div className={styles.portraitCardDynamic_footer_sub}>
              <div className={styles.portraitCardDynamic_footer_sub_details}>
                <div
                  className={styles.portraitCardDynamic_footer_sub_details_1}
                >
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
                  {watchlisted ? <WatchListIconLike /> : <WatchListIconEmpty />}
                </span>
                <span>
                  <InformationIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  imagePath: selectImagePath
});

export default connect(mapStateToProps)(PortraitCard);
