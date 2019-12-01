import React from "react";
// IMPORTING STYLES
import styles from "./sideBarMoreInfo.module.css";
// IMPORTING FUNCTIONS
import { formateDate, formateMovieLength } from "../../functions/functions";
// IMPORTING COMPONENTS
import SmallCard from "../smallCard/smallCard";

const SideBar = ({
  categories = [],
  releaseDate,
  length,
  directors = null,
  writers,
  season = null,
  episodes = null,
  newtworkLogo = null,
  linkToWatch = ""
}) => (
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
              <span key={category.id} className={styles.boxInfo}>
                {category.name}
              </span>
            ))}
          </div>
        </div>
      ) : null}
      {/* RELEASE DATE */}
      <div>
        <h3 className={styles.info_title}>Release Date</h3>
        <p className={styles.info_detail}>{formateDate(releaseDate)}</p>
      </div>
      {/* LENGTH */}
      <div>
        <h3 className={styles.info_title}>Length</h3>
        <p className={styles.info_detail}>{formateMovieLength(length)}</p>
      </div>
      {/* WRITERS */}
      {writers ? (
        <div>
          <h3 className={styles.info_title}>Writers</h3>
          {writers.map(writer => (
            <p key={writer.id} className={styles.info_detail}>
              {writer.name}
            </p>
          ))}
        </div>
      ) : null}
      {/* DIRECTOR */}
      {directors ? (
        <div>
          <h3 className={styles.info_title}>Directors</h3>
          {directors.map(director => (
            <p key={director.id} className={styles.info_detail}>
              {director.name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);

export default SideBar;
