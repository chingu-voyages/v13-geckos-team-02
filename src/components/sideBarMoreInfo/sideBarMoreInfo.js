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
  firstAirDate,
  lastAirDate,
  length = null,
  episodeLength = null,
  directors = null,
  writers,
  season = null,
  episodes = null,
  newtworkLogo = null,
  linkToWatch = "",
  height = "50"
}) => (
  <div className={styles.sideBar}>
    <div className={styles.sideBar_container} style={{ height: `${height}vh` }}>
      {/* WHERE TO WATCH */}
      {newtworkLogo ? (
        <div className={styles.whereToWatch}>
          <h3>Where to watch</h3>
          <a href={linkToWatch} target="_blank" rel="noreferrer noopener">
            <div className={styles.whereToWatch_container}>
              <SmallCard
                imageUrl={newtworkLogo}
                height={"100%"}
                weight={"100%"}
                backgroundSize={"contain"}
              />
            </div>
          </a>
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
      {releaseDate ? (
        <div>
          <h3 className={styles.info_title}>Release Date</h3>
          <p className={styles.info_detail}>{formateDate(releaseDate)}</p>
        </div>
      ) : null}
      {/* FIRST AIR DATE */}
      {firstAirDate ? (
        <div>
          <h3 className={styles.info_title}>First Air Date</h3>
          <p className={styles.info_detail}>{formateDate(firstAirDate)}</p>
        </div>
      ) : null}
      {/* LAST AIR DATE */}
      {lastAirDate ? (
        <div>
          <h3 className={styles.info_title}>Last Air Date</h3>
          <p className={styles.info_detail}>{formateDate(lastAirDate)}</p>
        </div>
      ) : null}
      {/* LENGTH */}
      {length ? (
        <div>
          <h3 className={styles.info_title}>Length</h3>
          <p className={styles.info_detail}>{formateMovieLength(length)}</p>
        </div>
      ) : null}
      {/* EPISODE LENGTH */}
      {episodeLength ? (
        <div>
          <h3 className={styles.info_title}>Episode Length</h3>
          <p className={styles.info_detail}>{episodeLength} mins</p>
        </div>
      ) : null}
      {/* WRITERS */}
      {writers.length !== 0 ? (
        <div>
          <h3 className={styles.info_title}>Writers</h3>
          {writers.map(writer => (
            <p key={writer.credit_id} className={styles.info_detail}>
              {writer.name}
            </p>
          ))}
        </div>
      ) : null}
      {/* DIRECTOR */}
      {directors.length !== 0 ? (
        <div>
          <h3 className={styles.info_title}>Directors</h3>
          {directors.map(director => (
            <p key={director.credit_id} className={styles.info_detail}>
              {director.name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);

export default SideBar;
