import React from "react";

import styles from "./sideBarMoreInfo.module.css";
import InfoSection from "../infoSection/infoSection";
import SmallCard from "../smallCard/smallCard";

const SideBar = ({
  categories = [],
  releaseDate,
  length,
  director = null,
  writers,
  season = null,
  episodes = null,
  newtworkLogo = null,
  linkToWatch = ""
}) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar_container}>
        {/* WHERE TO WATCH */}
        {newtworkLogo ? (
          <div className={styles.whereToWatch}>
            <h3>Where to watch</h3>
            <div className={styles.whereToWatch_container}>
              <SmallCard
                imageUrl={newtworkLogo}
                height={"100%"}
                weight={"100%"}
                backgroundSize={"contain"}
              />
            </div>
          </div>
        ) : null}
        {/* SEASON AND EPISODE */}

        <div>
          {season ? (
            <div>
              <span className={styles.boxInfo}>{season} Seasons</span>
            </div>
          ) : null}
          {episodes ? (
            <div>
              <span className={styles.boxInfo}>{episodes} Episodes</span>
            </div>
          ) : null}
        </div>
        {/* CATEGORY SECTION */}
        {categories.length > 0 ? (
          <div className={styles.category_box}>
            <h3 className={styles.sideBar_title}>Category</h3>
            <div>
              {categories.map(category => (
                <span className={styles.boxInfo}>{category}</span>
              ))}
            </div>
          </div>
        ) : null}
        {/* MORE INFORMATION */}
        <InfoSection title={"release date"} detail={releaseDate} />
        <InfoSection title={"length"} detail={length} />
        <InfoSection title={"director"} detail={director} />
        <InfoSection title={"writers"} detail={writers} />
      </div>
    </div>
  );
};

export default SideBar;
